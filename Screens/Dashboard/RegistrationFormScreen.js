import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Box, Center, PaddingBox} from '../../component/AlignBox';
import {Styles} from '../../component/Styles';
import {TextInputBox} from '../../component/TextInputBox';
import {color} from '../../component/theme';
import TopArrow from '../../component/TopArrow';
import UserImage from '../../component/UserImage';
import ModalSelector from 'react-native-modal-selector';
import Button from '../../component/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const RegistrationFormScreen = props => {
  let index = 0;
  const data = [
    {key: index++, section: true, label: 'Fruits'},
    {key: index++, label: 'Red Apples'},
    {key: index++, label: 'Cherries'},
    {
      key: index++,
      label: 'Cranberries',
      accessibilityLabel: 'Tap here for cranberries',
    },
    // etc...
    // Can also add additional custom keys which are passed to the onChange callback
    {key: index++, label: 'Vegetable', customKey: 'Not a fruit'},
  ];

  const dagree = [
    {key: 1, section: false, label: 'MBBS'},
    {key: 2,section: false, label: 'MD'},
    {key: 3,section: false, label: 'MS'},
    {key: 4,section: false, label: 'Others'},
  ];

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dagreeData, setdagreeData] = useState(dagree);
  const [dagreeDoc, setdagreeDoc] = useState([]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const selectDagree =async (option) =>{
    const result = await launchImageLibrary();
    console.log(result);
    if(!result.didCancel){
      if(option.label == "Others"){
        option.key = dagreeDoc.length-1  
      }
      let newArray = [...dagreeDoc, option]
      setdagreeDoc(newArray)
      console.log(newArray);
     let newUpdate= dagreeData.map((item, index)=>{
         ( item.key == option.key && item.label != "Others" ) ? item.section= true:null
          return {...item}
      })
      setdagreeData(newUpdate);
    }
     
  }

  const  removeDoc = (option) =>{
  let doc= dagreeDoc.filter((item) => item.key != option.key)
  console.log(doc);
    setdagreeDoc(doc);
    let newUpdate= dagreeData.map((item, index)=>{
      item.key == option.key ? item.section= false:null
      return {...item}
  })
  setdagreeData(newUpdate);
  }

  return (
    <SafeAreaView style={Styles.container}>
      <TopArrow navigation={props.navigation} color={color.black} />
      <ScrollView>
        <PaddingBox style={20} />
        <Center>
          <UserImage />
        </Center>
        <PaddingBox style={20} />
        <Box>
          <TextInputBox>
            <TextInput placeholder="Name*" style={styles.inputBox} />
          </TextInputBox>

          <PaddingBox style={20} />
          <TextInputBox>
            <TextInput placeholder="Email" style={styles.inputBox} />
          </TextInputBox>

          <PaddingBox style={20} />
          <TextInputBox>
            <TextInput placeholder="Phone number*" style={styles.inputBox} />
          </TextInputBox>
          <PaddingBox style={20} />

          <ModalSelector
            data={data}
            initValue="Select something yummy!"
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            optionContainerStyle={styles.backgroundColor}
            // onChange={(option)=>{ this.setState({textInputValue:option.label})}}
          >
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                height: 45,
                borderColor: color.primary,
                padding: 0,
              }}
              editable={false}
              placeholder="Category"
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
          <TextInputBox>
            <TextInput
              placeholder="Years of practice"
              style={styles.inputBox}
            />
          </TextInputBox>
          <PaddingBox style={20} />
          <TextInputBox>
            <TextInput placeholder="Clinic name" style={styles.inputBox} />
          </TextInputBox>
          <PaddingBox style={20} />
          <TouchableOpacity onPress={() => setShow(true)}>
            <TextInputBox>
              <Text>Open Time</Text>
            </TextInputBox>
          </TouchableOpacity>

          <PaddingBox style={20} />
          <TouchableOpacity onPress={() => setShow(true)}>
            <TextInputBox>
              <Text>Close Time</Text>
            </TextInputBox>
          </TouchableOpacity>
          <PaddingBox style={20} />
          <TextInputBox>
            <TextInput placeholder="Education" style={styles.inputBox} />
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
            onChange={(option)=>{ selectDagree(option) }}
          >
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                height: 45,
                borderColor: color.primary,
                padding: 0,
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
                  <TouchableOpacity style={styles.docContainer} key={index} onPress={()=>removeDoc(item)} >
                    <Entypo
                      name="circle-with-cross"
                      size={24}
                      color={color.red}
                      style={styles.crossIcon}
                    />
                    <Image
                      source={require('../../assets/doc.png')}
                      style={{width: 50, height: 50}}
                    />
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          )}
          <TextInputBox>
            <TextInput placeholder="Address" style={styles.inputBox} />
          </TextInputBox>
          <PaddingBox style={20} />

          <ModalSelector
            data={data}
            initValue="Select something yummy!"
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            optionContainerStyle={styles.backgroundColor}
            // onChange={(option)=>{ this.setState({textInputValue:option.label})}}
          >
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                height: 45,
                borderColor: color.primary,
                padding: 0,
              }}
              editable={false}
              placeholder="State"
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

          <ModalSelector
            data={data}
            initValue="Select something yummy!"
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            optionContainerStyle={styles.backgroundColor}
            // onChange={(option)=>{ this.setState({textInputValue:option.label})}}
          >
            <TextInput
              style={{
                borderBottomWidth: 1.5,
                height: 45,
                borderColor: color.primary,
                padding: 0,
              }}
              editable={false}
              placeholder="City"
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
          <TextInputBox>
            <TextInput placeholder="Pincode" style={styles.inputBox} />
          </TextInputBox>
          <PaddingBox style={20} />
        </Box>
      </ScrollView>
      <Box>
        <Button
          name="Continue"
          onPress={() => props.navigation.navigate('SlotGanrator')}
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
    </SafeAreaView>
  );
};

export default RegistrationFormScreen;

const styles = StyleSheet.create({
  inputBox: {
    padding: 0,
    width: '100%',
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
  arrowIcon: {position: 'absolute', right: 5, top: 15},
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
