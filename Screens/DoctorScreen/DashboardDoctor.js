import {  SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Styles } from '../../component/Styles';
import SimpleHeader from '../../Comman/SimpleHeader';
import { Box, Center, PaddingBox } from '../../component/AlignBox';
import { color } from '../../component/theme';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import * as mainAction from "../../redux/actions/mainAction";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../component/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from "react-native-vector-icons/AntDesign";


const DashboardDoctor = (props) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(true);

  const token = useSelector(state => state.auth.user.data.token);

  const [data, setdata] = useState([])
    ;
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    console.log(moment(currentDate).format("MM/DD/YYYY"));
    onHandleGenerateSlot()
  
    // setopenTime(moment(currentDate).format('HH:mm').toString())
  };

  useEffect(() => {
    onHandleGenerateSlot()
  AsyncStorage.removeItem(
      'profile'
    );
  }, []);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', (e) => {
      onHandleGenerateSlot()
    });
    return unsubscribe;
  }, [props]);


  const onHandleGenerateSlot = () => {
    setloading(true)
    let date = moment(date).format('DD/MM/YYYY')
    dispatch(mainAction.getSlotsDoctor(date, token))
      .then(result => {
        if (result.status == 200) {
          setdata(result.body)
        }
        console.log("asdasd", result)
        setloading(false)
      })
      .catch(err => {
        // ToastAndroid.show(err, ToastAndroid.LONG)
        setloading(false)
        console.log(err)
      })
  }



  return (
    <SafeAreaView style={Styles.container}>
      <Loader loading={loading} />
      <SimpleHeader name={"Dashboard"} />
      <PaddingBox style={25} />
      <Box>
        <Text style={Styles.text18SB}>
          Today's thought :
        </Text>
        <PaddingBox style={10} />
        <Text style={Styles.text14L}>
          As we get involved in the emotional healing of others, we get healed
          emotionally ourselves.
        </Text>
        <PaddingBox style={30} />
        <Center>
          <Text style={Styles.text16B}>
            Slot Details :
          </Text>
        </Center>
        <PaddingBox style={20} />
        <TouchableOpacity onPress={() => { setShow(true) }} style={styles.dateContainer} >
          <Text>{moment(date).format('DD/MM/YYYY')}</Text>
          <AntDesign name="calendar" size={24} color="black" />
        </TouchableOpacity>
        <ScrollView>
          <PaddingBox style={20} />
          <View style={styles.containerList}>
            {data.map((item, index) => (
              <TouchableOpacity style={item.status == "Available" ? styles.containerBoxIsSeleted : styles.containerBox} onPress={() => selectslots(index)}>
                <Text style={[Styles.text14SB, item.status == "Available" ? { color: color.white } : { color: color.primary }]}>
                  {item.time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </Box>


      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
};

export default DashboardDoctor;

const styles = StyleSheet.create({
  dateContainer: {
    borderWidth: 1,
    borderColor: color.otpColor,
    paddingHorizontal: 10, paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  containerBox: {
    width: "30%",
    borderRadius: 10,
    // borderWidth:1,
    backgroundColor: color.red,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 7,
    alignItems: 'center', justifyContent: 'center'

  },
  containerBoxIsSeleted: {
    width: "30%",
    borderRadius: 10,
    // borderWidth:1,
    backgroundColor: color.green,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 7,
    alignItems: 'center', justifyContent: 'center'

  },
  containerList: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
