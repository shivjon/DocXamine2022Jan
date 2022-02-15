import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {
  Box,
  Center,
  Left,
  PaddingBox,
  VerticalBox,
} from '../../component/AlignBox';
import { Styles } from '../../component/Styles';
import { TextInputBox } from '../../component/TextInputBox';
import { color } from '../../component/theme';
import TopArrow from '../../component/TopArrow';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalSelector from 'react-native-modal-selector';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../component/Button';
import moment from 'moment';
import * as authAction from "../../redux/actions/authAction";
import * as mainAction from "../../redux/actions/mainAction";
import { useDispatch, useSelector } from 'react-redux';

const SlotGanrator = props => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const token = useSelector(state => state.auth.user.data.token);

  let index = 0;
  const data = [
    { key: index++, label: '15 min', state: "quarter" },
    { key: index++, label: '30 min', state: "half" },
    { key: index++, label: '60 min', state: "one" },
  ];
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [showSlot, setshowSlot] = useState(false);
  const [openTime, setopenTime] = useState("");
  const [closeTime, setcloseTime] = useState("");
  const [slottime, setslottime] = useState("");
  const [slotValue, setslotValue] = useState("");

  const [slots, setslots] = useState([
    { name: '7:30 am' },
    { name: '10:30 am' },
    { name: '12:30 pm' },
    { name: '2:30 pm' },
    { name: '4:30 pm' },
    { name: '5:30 pm' },
    { name: '6:30 pm' },
    { name: '7:30 pm' },
    { name: '8:30 pm' },
  ]);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(moment(currentDate).format('HH:mm'));
    setopenTime(moment(currentDate).format('HH:mm').toString())
  };

  const onChange1 = (event, selectedDate) => {
    const currentDate1 = selectedDate || date1;
    setShow1(Platform.OS === 'ios');
    setDate1(currentDate1);
    setcloseTime(moment(currentDate1).format('HH:mm').toString())
  };

  const convertTime = (time) => {
    var opt = time.split(":");
    console.log(opt);
    return parseInt(opt[0]) * 60 + parseInt(opt[1])

  }

  const onHandleGenerateSlot = () => {
    console.log(token);
    let value = {
      'openT': convertTime(openTime),
      'closeT': convertTime(closeTime),
      'duration': slotValue
    }
    dispatch(mainAction.slotGenerator(value, token))
      .then(result => {
        console.log(result)
        if (result.status == 200) {
          props.navigation.navigate("HomeStack");
          ToastAndroid.show(result.message, ToastAndroid.LONG)
        } else if (result.status == 409) {
          // props.navigation.navigate("HomeStack");
          ToastAndroid.show(result.message, ToastAndroid.LONG)
        }
        else {
          ToastAndroid.show(result.message, ToastAndroid.LONG);
        }
      })
      .catch(err => {
        ToastAndroid.show(err, ToastAndroid.LONG)
        setLoading(false)
        console.log(err)
      })
  }



  return (
    <View style={Styles.container}>
      <TopArrow navigation={props.navigation} color={color.black} />
      <Center>
        <PaddingBox style={7} />
        <Text style={[Styles.text22B]}>Generate your slots</Text>
      </Center>
      <PaddingBox style={20} />
      <Box>
        <Text style={Styles.text18M}>Select your working hours</Text>
        <PaddingBox style={20} />
        <View style={Styles.rowBet}>
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => setShow(true)}>
            <TextInputBox style={styles.inputView}>
              <Entypo name="time-slot" size={20} color={color.greyMedium} />
              <VerticalBox style={5} />
              <Text  style={openTime ?styles.inputView : styles.inputView1}>{openTime?openTime: "Open time*"}</Text>
          
            </TextInputBox>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => setShow1(true)}>
            <TextInputBox style={styles.inputView}>
              <Entypo name="time-slot" size={20} color={color.greyMedium} />
              <VerticalBox style={5} />
              <Text style={closeTime ?styles.inputView : styles.inputView1}>{closeTime?closeTime: "Close time*"}</Text>

            </TextInputBox>
          </TouchableOpacity>
        </View>
        <PaddingBox style={20} />
        <ModalSelector
          data={data}
          initValue="Select something yummy!"
          supportedOrientations={['landscape']}
          accessible={true}
          scrollViewAccessibilityLabel={'Scrollable options'}
          cancelButtonAccessibilityLabel={'Cancel Button'}
          optionContainerStyle={styles.backgroundColor}
          onChange={(option) => { setslottime(option.label); setslotValue(option.state) }}
        >
          <TextInputBox>

            <Text
              style={{
                // borderBottomWidth: 1.5,
                // height: 45,
                borderColor: color.primary,
                padding: 0,
                fontFamily: "Poppins-Medium",
                color: slottime ? color.black : null
              }}

            >
              {slottime ? slottime : "Duration"}
            </Text>
          </TextInputBox>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={color.primary}
            style={styles.arrowIcon}
          />
        </ModalSelector>
        <PaddingBox style={40} />

        <Button
          name="Generate"
          onPress={() => onHandleGenerateSlot()}
        />
        <PaddingBox style={20} />

        <Text style={[Styles.text12R, { color: color.greyLite }]}>
          NOTE :  Slots once generated cannot be edited. If needed, they have to be deleted and regenerated again.
        </Text>
      </Box>

      <PaddingBox style={50} />
      {/* {showSlot &&
      <ScrollView>
        <Box>
          <Text style={Styles.text18M}>Available Slots</Text>
          <PaddingBox style={15} />
          <View style={styles.containerList}>
            {slots.map((item, index) => (
              <TouchableOpacity
                style={
                  item.isSelected
                    ? styles.containerBoxIsSeleted
                    : styles.containerBox
                }
                onPress={() => selectslots(index)}>
                <Text
                  style={[
                    Styles.text14SB,
                    item.isSelected
                      ? {color: color.white}
                      : {color: color.primary},
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Box>
   
      </ScrollView>
        } */}
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
    </View>
  );
};

export default SlotGanrator;

const styles = StyleSheet.create({
  inputBox: {
    width: '45%',
  },
  containerList: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  inputView: {
    width: '100%',
    fontFamily: "Poppins-Medium",
    color: color.black
  },
  inputView1: {
    width: '100%',
    fontFamily: "Poppins-Medium",
    color: null
  },
  arrowIcon: { position: 'absolute', right: 5, top: 15 },
  backgroundColor: {
    backgroundColor: color.white,
  },
  containerBox: {
    width: "30%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.primary,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 7,
    alignItems: 'center', justifyContent: 'center'

  },
  containerBoxIsSeleted: {
    width: "30%",
    borderRadius: 10,
    // borderWidth:1,
    backgroundColor: color.primary,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 7,
    alignItems: 'center', justifyContent: 'center'

  },
});
