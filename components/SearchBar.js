import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons  from "react-native-vector-icons/Ionicons"
// import Loction from 'react-native-ionicons'


export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: "row"}}>
      <GooglePlacesAutocomplete
      placeholder="Search"
      styles={{
        textInput:{
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight:"700",
            marginTop: 7,
        },
        textInputContainer:{
            backgroundColor:"#eee",
            borderRadius:50,
            flexDirection:"row",
            alignItems:"center",
            marginRight: 10,
        },
      }}

      renderLeftButton={() => (
        <View>
            {/* <Location name="location" /> */}
            {/* <ion-icon name="location-sharp"></ion-icon> */}
            <Ionicons name="location-sharp" size={24}/>
        </View>
      )}

   />
    </View>
  )
}