import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './index-styles';
import colors from '../../config/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PrimaryButton from '../../components/atoms/primarybutton/primarytButton';
import PrimaryTextInput from '../../components/atoms/primaryTextInputs/primaryTextInput';
import {Picker} from '@react-native-picker/picker';
import {showMessage} from 'react-native-flash-message';
import Header from '../../components/atoms/header/header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Insert = ({navigation}) => {
  const [asyncRecord, setasyncRecord] = useState('');
  const [loader, setloader] = useState(false);
  const [selected, setselected] = useState('Select');
  const [engine, setengine] = useState('');
  const [model, setmodel] = useState('');
  const [color, setcolor] = useState('');
  const [make, setmake] = useState('');

  const cars = [
    {
      id: 1,
      car: 'Mehran',
    },
    {
      id: 2,
      car: 'GLi',
    },
    {
      id: 3,
      car: 'Vigo',
    },
  ];

  useEffect(() => {
    asynValues();
  }, []);

  const asynValues = async () => {
    await AsyncStorage.getItem('userdetails').then(async value => {
      let data = JSON.parse(value);
      setasyncRecord(data);
    });
  };

  const empty = () => {
    setmake('');
    setmodel('');
    setengine('');
    setselected('');
    setcolor('');
  };

  const uploadRecord = () => {
    if (engine == '') {
      showMessage({
        message: 'Engine no is empty',
        type: 'danger',
        floating: true,
        backgroundColor: colors.red,
      });
      return;
    }

    if (model == '') {
      showMessage({
        message: 'Model no is empty',
        type: 'danger',
        floating: true,
        backgroundColor: colors.red,
      });
      return;
    }
    if (make == '') {
      showMessage({
        message: 'Manufacture no is empty',
        type: 'danger',
        floating: true,
        backgroundColor: colors.red,
      });
      return;
    }
    if (color == '') {
      showMessage({
        message: 'Color no is empty',
        type: 'danger',
        floating: true,
        backgroundColor: colors.red,
      });
      return;
    }

    setloader(true);
    axios({
      method: 'POST',
      url: 'https://dummyjson.com/products/add',
      data: {
        engine: engine,
        model: model,
        color: color,
        make: make,
      },
      headers: {
        Authorization: asyncRecord?.token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        console.log(response?.data);
        if (response?.status == '200') {
          showMessage({
            message: JSON.stringify(response?.data),
            type: 'success',
            floating: true,
            backgroundColor: colors.lightBlue,
          });
          // console.log(response.data)
          setloader(false);
          navigation.navigate('Home');
          empty();
        }
      })
      .catch(function (error) {
        console.warn(error);
        setloader(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        img={''}
        title="Add Record"
        icon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={25} color={colors.black} />
          </TouchableOpacity>
        }
      />
      <View style={styles.viewInner}>
        <Picker
          style={{padding: 10}}
          mode="dropdown"
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => setselected(itemValue)}>
          <Picker.Item label="Select" value="" style={styles.dropDownText} />
          {cars?.map(e => {
            return (
              <Picker.Item
                label={e.car}
                value={e.car}
                style={styles.dropDownText}
                key={e.id}
              />
            );
          })}
        </Picker>
      </View>

      <KeyboardAwareScrollView>
        <PrimaryTextInput
          placeholder="Engine No"
          value={engine}
          outerView={{marginTop: hp(2)}}
          onchangetext={e => setengine(e)}
        />
        <PrimaryTextInput
          placeholder="Model"
          value={model}
          outerView={{marginTop: hp(2)}}
          onchangetext={e => setmodel(e)}
        />
        <PrimaryTextInput
          placeholder="Color"
          value={color}
          outerView={{marginTop: hp(2)}}
          onchangetext={e => setcolor(e)}
        />
        <PrimaryTextInput
          placeholder="Make No"
          value={make}
          outerView={{marginTop: hp(2)}}
          onchangetext={e => setmake(e)}
        />
        <PrimaryButton
          loader={loader}
          btnTitle="Insert"
          btnStyle={{marginTop: hp(2)}}
          onPress={() => uploadRecord()}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Insert;
