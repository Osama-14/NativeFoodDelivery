import {View, Text} from 'react-native';
import React from 'react';

export default function HeaderTabs() {
  return (
    <View>
      <Headerbutton />
      {/* headerbutton */}
    </View>
  );
}

const Headerbutton = () => <Text>Delivery</Text>;
