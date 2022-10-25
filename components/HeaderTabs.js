import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <Headerbutton
       text="Delivery" 
       btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        
        />
      <Headerbutton text="Delivery" btnColor="white" textColor="black" />
    </View>
  );
}

const Headerbutton = props => (
  <TouchableOpacity
    style={{
      backgroundColor: props.btnColor,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}>
    <Text
      style={{
        color: props.textColor,
        fontSize: 15,
        fontWeight: '900',
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
