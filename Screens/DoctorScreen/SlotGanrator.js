import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Box,
  Center,
  Left,
  PaddingBox,
  VerticalBox,
} from '../../component/AlignBox';
import {Styles} from '../../component/Styles';
import {TextInputBox} from '../../component/TextInputBox';
import {color} from '../../component/theme';
import TopArrow from '../../component/TopArrow';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalSelector from 'react-native-modal-selector';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../component/Button';

const SlotGanrator = props => {
  let index = 0;
  const data = [
    {key: index++, label: '10 min'},
    {key: index++, label: '20 min'},
    {key: index++, label: '30 min'},
    {key: index++, label: '40 min'},
    {key: index++, label: '50 min'},
    {key: index++, label: '60 min'},
  ];
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showSlot, setshowSlot] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const [slots, setslots] = useState([
    {name: '7:30 am'},
    {name: '10:30 am'},
    {name: '12:30 pm'},
    {name: '2:30 pm'},
    {name: '4:30 pm'},
    {name: '5:30 pm'},
    {name: '6:30 pm'},
    {name: '7:30 pm'},
    {name: '8:30 pm'},
  ]);

  return (
    <SafeAreaView style={Styles.container}>
      <TopArrow navigation={props.navigation} color={color.black} />
      <Center>
        <PaddingBox style={7} />
        <Text style={[Styles.text22B]}>Slot Generator</Text>
      </Center>
      <PaddingBox style={20} />
      <Box>
        <Text style={Styles.text18M}>How long do you need?</Text>
        <PaddingBox style={20} />
        <View style={Styles.rowBet}>
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => setShow(true)}>
            <TextInputBox style={styles.inputView}>
              <Entypo name="time-slot" size={20} color={color.greyMedium} />
              <VerticalBox style={5} />
              <TextInput
                placeholder="Open time*"
                editable={false}
                style={styles.inputView}
              />
            </TextInputBox>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => setShow(true)}>
            <TextInputBox style={styles.inputView}>
              <Entypo name="time-slot" size={20} color={color.greyMedium} />
              <VerticalBox style={5} />
              <TextInput
                placeholder="Close time*"
                editable={false}
                style={styles.inputView}
              />
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
            placeholder="Duration"
            // value={this.state.textInputValue}
          />
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
            onPress={() => setshowSlot(true)}
            />
            <PaddingBox style={10} />
      </Box>
      <PaddingBox style={50} />
      {showSlot &&
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
        }
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

export default SlotGanrator;

const styles = StyleSheet.create({
  inputBox: {
    width: '45%',
  },
  containerList:{
    flexWrap:"wrap",
    flexDirection:"row",
    },
  inputView: {
    width: '100%',
  },
  arrowIcon: {position: 'absolute', right: 5, top: 15},
  backgroundColor: {
    backgroundColor: color.white,
  },
  containerBox:{
    width:"30%",
    borderRadius:10,
    borderWidth:1,
    borderColor:color.primary,
    paddingVertical:10,
    marginHorizontal:5,
    marginVertical:7,
    alignItems:'center',justifyContent:'center'
    
},
containerBoxIsSeleted:{
    width:"30%",
    borderRadius:10,
    // borderWidth:1,
    backgroundColor:color.primary,
    paddingVertical:10,
    marginHorizontal:5,
    marginVertical:7,
    alignItems:'center',justifyContent:'center'
    
},
});
