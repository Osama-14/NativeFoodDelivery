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
      <Headerbutton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const Headerbutton = props => (
  <TouchableOpacity
    style={
      props.activeTab === props.text
        ? {
            backgroundColor: 'black',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
          }
        : {
            backgroundColor: 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
          }
    }
    onPress={() => props.setActiveTab(props.text)}>
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
