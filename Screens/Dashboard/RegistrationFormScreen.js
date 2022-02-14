import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import { Box, Center, PaddingBox } from '../../component/AlignBox';
import { Styles } from '../../component/Styles';
import { TextInputBox } from '../../component/TextInputBox';
import { color } from '../../component/theme';
import TopArrow from '../../component/TopArrow';
import UserImage from '../../component/UserImage';
import ModalSelector from 'react-native-modal-selector';
import Button from '../../component/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as authAction from "../../redux/actions/authAction";
import * as mainAction from "../../redux/actions/mainAction";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Loader from '../../component/Loader';

const RegistrationFormScreen = props => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const token = useSelector(state => state.auth.user.data.token);
  const [categorys, setcategorys] = useState([]);
  const [citys, setcitys] = useState([]);

  let index = 0;


  const dagree = [
    { key: 1, section: false, label: 'MBBS' },
    { key: 2, section: false, label: 'BDS' },
    { key: 3, section: false, label: 'BAMS' },
    { key: 4, section: false, label: 'BUMS' },
    { key: 5, section: false, label: 'BHMS' },
    { key: 6, section: false, label: 'BYNS' },
    { key: 7, section: false, label: 'B.V.Sc & AH' },
    { key: 8, section: false, label: 'Others' },
  ];
  const [states, setstates] = useState([]);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [dagreeData, setdagreeData] = useState(dagree);
  const [dagreeDoc, setdagreeDoc] = useState([]);

  const [iniuserData, setiniuserData] = useState({
    'doc_name': '',
    'doc_image': '',
    'doc_phone': '',
    'doc_category': '',
    'doc_years_of_practice': '',
    'doc_description': '',
    'doc_clinic_name': '',
    'opening_time': '',
    'closing_time': '',
    'doc_education': '',
    'doc_degree_photo': '',
    'doc_address': '',
    'doc_state': '',
    'doc_city': '',
    'doc_pincode': ''

  });
  const [userData, setuserData] = useState(iniuserData);

  useEffect(() => {
    setLoading(false)
    console.log(token);
    onHandleState();
    onHandleDoctorCategories();
  }, []);

  const onHandleState = () =>{
    dispatch(mainAction.getStates())
    .then(result => {
      console.log(result)
      if(result.status == 200){
        const arr = []
          result.body.map((item, index)=>{
              let ar ={
                key:index,
                label:item.name,
                state:item.state_id
              }
              arr.push(ar);
          })
          setstates(arr)
      }
    })
    .catch(err => {
      ToastAndroid.show(err, ToastAndroid.LONG)
      setLoading(false)
      console.log(err)
    })
  }

  const onHandleCity = (stateID) =>{
     var id= JSON.stringify(stateID)
     var ID = JSON.parse(id)
    console.log(ID.state);
    dispatch(mainAction.getcities(ID.state))
    .then(result => {
      console.log(result)
      if(result.status == 200){
        const arr = []
          result.body.map((item, index)=>{
              let ar ={
                key:index,
                label:item.name,
              }
              arr.push(ar);
          })
          setcitys(arr)
      }
    })
    .catch(err => {
      ToastAndroid.show(err, ToastAndroid.LONG)
      setLoading(false)
      console.log(err)
    })
  }

  const onHandleDoctorCategories = () =>{
    dispatch(mainAction.getDoctorCategories())
    .then(result => {
      console.log(result)
      if(result.status == 200){
        const arr = []
          result.body.map((item, index)=>{
              let ar ={
                key:index,
                label:item.category,
              }
              arr.push(ar);
          })
          setcategorys(arr)
      }
    })
    .catch(err => {
      ToastAndroid.show(err, ToastAndroid.LONG)
      setLoading(false)
      console.log(err)
    })
  }



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(moment(currentDate).format('HH:mm'));
    setuserData({ ...userData, ["opening_time"]: moment(currentDate).format('HH:mm').toString() })
    

  };

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow1(false);
    setDate1(currentDate);
    setuserData({ ...userData, ["closing_time"]: moment(currentDate).format('HH:mm').toString() })
     
  };

  const selectDagree = async (option) => {
    const result = await launchImageLibrary();
    console.log(result);
    if (!result.didCancel) {
      if (option.label == "Others") {
        option.key = dagreeData.length + dagreeDoc.length
      }
      option.uri = result.assets[0].uri

      let newArray = [...dagreeDoc, option]
      setdagreeDoc(newArray)
      console.log(newArray,  dagreeDoc.length );
      let newUpdate = dagreeData.map((item, index) => {
        (item.key == option.key && item.label != "Others") ? item.section = true : null
        return { ...item }
      })
      setdagreeData(newUpdate);
    }

  }

  const removeDoc = (option) => {
    let doc = dagreeDoc.filter((item) => item.key != option.key)
    console.log(doc);
    setdagreeDoc(doc);
    let newUpdate = dagreeData.map((item, index) => {
      item.key == option.key ? item.section = false : null
      return { ...item }
    })
    setdagreeData(newUpdate);
  }



  const OnHandleCreateDoctorProfile = (value) => {
    setLoading(true)
    userData.doc_degree_photo = value
    dispatch(authAction.createDoctorProfile(userData, token))
      .then(result => {
        console.log(result)
        if (result.status == 200) {
          props.navigation.navigate("ChooseUserType")
        } else {
        ToastAndroid.show("Something went wrong.", ToastAndroid.LONG)

          // props.navigation.navigate("ChooseUserType")
        }
        setLoading(false);
      })
      .catch(err => {
        ToastAndroid.show(err, ToastAndroid.LONG)
        setLoading(false)
        console.log(err)
      })
  }

  const onChangeData = (text, value) => {
    setuserData({ ...userData, [value]: text })
  }

  const onHandleChangeImage = async() =>{
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri );
    if (!result.didCancel) {
      setuserData({ ...userData, ["doc_image"]: result.assets[0].uri })
      uploadUserImage(result.assets[0].uri)
    }
  }

  const uploadUserImage= (item) =>{
    let formData = new FormData();
    formData.append("image", { uri: item, name: 'some_name.jpeg', type: 'image/jpeg' })
    dispatch(authAction.uploadImage(formData, token))
    .then(result => {
       console.log(result);
       if(result.status == 200){
       setuserData({ ...userData, ["doc_image"]: "https://backend.docxamine.com/"+result.body[0].filename })
       }
    })
    .catch(err => {
        console.log("sd", err)
    })
  }

  const uploadImage = async () => {
    setLoading(true)
    let formData = new FormData();
    // console.log(image)
    const imageData = [];
    dagreeDoc.map((item, index) => {
        console.log(item)
        formData.append("image", { uri: item.uri, name: 'some_name.jpeg', type: 'image/jpeg' })
        dispatch(authAction.uploadImage(formData, token))
            .then(result => {
                //    console.log("ress",result);
                if(result.status == 200){
                  imageData.push(result.body[0].filename)
                  if (dagreeDoc.length == imageData.length) {
                      console.log(dagreeDoc.length, index + 1);
                      OnHandleCreateDoctorProfile(imageData)
                  }
                }
            })
            .catch(err => {
                // setLoading(false);
                console.log("sd", err)
            })
    })


}

  return (
    <SafeAreaView style={Styles.container}>
      <TopArrow navigation={props.navigation} color={color.black} />
      <Loader loading={loading} />
      <ScrollView>
        <PaddingBox style={20} />
        <Center>
          <UserImage image={userData.doc_image} onHandleChangeImage={onHandleChangeImage} />
        </Center>
        <PaddingBox style={20} />
        <Box>
          <TextInputBox>
            <TextInput placeholder="Name*" style={[styles.inputBox,Styles.text14M]}
              value={userData.doc_name}
              onChangeText={(t) => onChangeData(t, "doc_name")}
            />
          </TextInputBox>

          <PaddingBox style={20} />
          {/* <TextInputBox>
            <TextInput placeholder="Email" style={[styles.inputBox,Styles.text14M]}
              value={userData.doc_email}
              onChangeText={(t) => onChangeData(t, "doc_email")} />
          </TextInputBox>

          <PaddingBox style={20} /> */}
          <TextInputBox>
            <TextInput 
            
            placeholder="Phone number*" value={userData.doc_phone}
            keyboardType="number-pad"
              onChangeText={(t) => onChangeData(t, "doc_phone")} style={[styles.inputBox,Styles.text14M]} />
          </TextInputBox>
          <PaddingBox style={20} />

          <ModalSelector
            data={categorys}
            initValue="Select something yummy!"
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            optionContainerStyle={styles.backgroundColor}
            onChange={(option)=>{ onChangeData(option.label, "doc_category" )}}
          >
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                height: 45,
                borderColor: color.primary,
                paddingLeft: 5,
                fontFamily:"Poppins-Medium",
                color:userData.doc_category ? color.black:null
              }}
              editable={false}
              placeholder="Category"
            value={userData.doc_category}
            />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={color.primary}
              style={styles.arrowIcon}
            />
          </ModalSelector>
          <PaddingBox style={20} />
          <TextInputBox>
            <TextInput
              placeholder="Years of practice"
              style={[styles.inputBox,Styles.text14M]}
              value={userData.doc_years_of_practice}
              keyboardType="number-pad"
              onChangeText={(t) => onChangeData(t, "doc_years_of_practice")}
            />
          </TextInputBox>
          <PaddingBox style={20} />
          <TextInputBox>
            <TextInput placeholder="Clinic name" style={[styles.inputBox,Styles.text14M]}
              value={userData.doc_clinic_name}
              onChangeText={(t) => onChangeData(t, "doc_clinic_name")}
            />
          </TextInputBox>
          <PaddingBox style={20} />
          <TouchableOpacity onPress={() => setShow(true)}>
            <TextInputBox>
              <Text style={userData.opening_time ? styles.timeStyle : styles.timeLabel}>{userData.opening_time ? userData.opening_time  : "Open Time"} </Text>
            </TextInputBox>
          </TouchableOpacity>

          <PaddingBox style={20} />
          <TouchableOpacity onPress={() => setShow1(true)}>
            <TextInputBox>
              <Text style={userData.closing_time ? styles.timeStyle : styles.timeLabel}>{userData.closing_time ? userData.closing_time  : "Close Time"}</Text>
            </TextInputBox>
          </TouchableOpacity>
          <PaddingBox style={20} />
          <TextInputBox>
            <TextInput placeholder="Education" style={[styles.inputBox,Styles.text14M]} value={userData.doc_education}
              onChangeText={(t) => onChangeData(t, "doc_education")} />
          </TextInputBox>
          {/* <PaddingBox style={20} />
          <TouchableOpacity style={styles.inputContainer}>
            <Image
              source={require('../../assets/doc.png')}
              style={{width: 50, height: 50}}
            />
            <PaddingBox style={10} />
            <Text>Degree Photo</Text>
          </TouchableOpacity> */}
          <PaddingBox style={20} />

          <ModalSelector
            data={dagreeData}
            initValue="Select something yummy!"
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            optionContainerStyle={styles.backgroundColor}
            onChange={(option) => { selectDagree(option) }}
          >
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                height: 45,
                borderColor: color.primary,
                paddingLeft: 5,
                fontFamily:"Poppins-Medium",
                color:userData.doc_category ? color.black:null
              }}
              editable={false}
              placeholder="Select Degree photo"
              // value={this.state.textInputValue}
            />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={color.primary}
              style={styles.arrowIcon}
            />
          </ModalSelector>
          <PaddingBox style={20} />
          {dagreeDoc && (
            <>
              <ScrollView horizontal={true}>
                {dagreeDoc.map((item, index) => (
                  <TouchableOpacity style={styles.docContainer} key={index} onPress={() => removeDoc(item)} >
                    <Entypo
                      name="circle-with-cross"
                      size={24}
                      color={color.red}
                      style={styles.crossIcon}
                    />
                    <Image
                      source={require('../../assets/doc.png')}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          )}
          <TextInputBox>
            <TextInput placeholder="Address" style={[styles.inputBox,Styles.text14M]} value={userData.doc_address}
              onChangeText={(t) => onChangeData(t, "doc_address")}  />
          </TextInputBox>
          <PaddingBox style={20} />
          <TextInputBox>
            <TextInput placeholder="Description" style={[styles.inputBox,Styles.text14M]} value={userData.doc_description}
              onChangeText={(t) => onChangeData(t, "doc_description")}  />
          </TextInputBox>
          <PaddingBox style={20} />
          <ModalSelector
            data={states}
            initValue=""
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            optionContainerStyle={styles.backgroundColor}
            onChange={(t)=>{onChangeData(t.label, "doc_state"); onHandleCity(t) }}
          >
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                height: 45,
                borderColor: color.primary,
                paddingLeft: 5,
                fontFamily:"Poppins-Medium",
                color:userData.doc_state ? color.black:null
              }}
              editable={false}
              placeholder="State"
            value={userData.doc_state}
            />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={color.primary}
              style={styles.arrowIcon}
            />
          </ModalSelector>
          <PaddingBox style={20} />

          <ModalSelector
            data={citys}
            initValue="Select something yummy!"
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            optionContainerStyle={styles.backgroundColor}
          onChange={(t)=>{onChangeData(t.label, "doc_city") }}
          >
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                height: 45,
                borderColor: color.primary,
                paddingLeft: 5,
                fontFamily:"Poppins-Medium",
                color:userData.doc_city ? color.black:null
              }}
              editable={false}
              placeholder="City"
            value={userData.doc_city}
            />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={color.primary}
              style={styles.arrowIcon}
            />
          </ModalSelector>
          <PaddingBox style={20} />
          <TextInputBox>
            <TextInput placeholder="Pincode" style={[styles.inputBox,Styles.text14M]} value={userData.doc_pincode}
              onChangeText={(t) => onChangeData(t, "doc_pincode")}
              keyboardType="number-pad"
              />
          </TextInputBox>
          <PaddingBox style={20} />
        </Box>
      </ScrollView>
      <Box>
        <Button
          name="Continue"
          onPress={() => uploadImage()}
        />
        <PaddingBox style={10} />
      </Box>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={onChange1}
        />
      )}
    </SafeAreaView>
  );
};

export default RegistrationFormScreen;

const styles = StyleSheet.create({
  inputBox: {
    padding: 0,
    width: '100%',
  },
  timeStyle:{
    color:color. black,
    fontFamily:"Poppins-Medium"
  },
  timeLabel:{
    fontFamily:"Poppins-Medium",
    color:color.placeholder,
  },
  crossIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
    zIndex: 100,
    backgroundColor: color.white,
  },
  docContainer: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderColor: color.primary,
  },
  backgroundColor: {
    backgroundColor: color.white,
  },
  arrowIcon: { position: 'absolute', right: 5, top: 15 },
  inputContainer: {
    // borderRadius: 15,
    borderWidth: 1.5,
    borderRadius: 10,
    height: 150,
    borderColor: color.primary,
    paddingHorizontal: 5,
    backgroundColor: color.white,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
