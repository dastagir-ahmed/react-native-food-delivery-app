import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity} from "react-native";
import React,{useRef, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/theme";
import {Feather, AntDesign } from '@expo/vector-icons';
import styles from "./search.style";
import LottieView from "lottie-react-native";

const Search = () => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const animation = useRef(null);

  const handleSearch = async() =>{
    try {
      const response = await axios.get(`https://travelapprailway-production.up.railway.app/api/places/search/${searchKey}`)
      setSearchResults(response.data)
    } catch (error) {
      console.log("Failed to get products" , error);
    }
  };

  return (
    <SafeAreaView>
      <View style={{backgroundColor: COLORS.primary, height: SIZES.height}}>
      <View style={{backgroundColor: COLORS.offwhite, height: SIZES.height-140, borderBottomEndRadius: 30, borderBottomStartRadius: 30}}>
      <View style={styles.searchContainer}>
    
      <View style={styles.searchWrapper}>
      
        <TextInput 
        style={styles.input}
        value={searchKey}
        onChangeText={setSearchKey}
        placeholder='What do you want to eat?'
        />
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
        <Feather name='search' size={24} color={COLORS.secondary}/>
      </TouchableOpacity>
    </View>

    {searchResults.length === 0 ? (
      <View style={{width: SIZES.width, height: SIZES.height/1.5, right: 90}}>
         <LottieView
          autoPlay
          ref={animation}
          style={{ width: "100%", height: "100%", }}
          source={require("../../assets/anime/cook.json")}
        />
      </View>
    ): (
      <FlatList 
      data={searchResults}
      keyExtractor={(item)=> item._id}
      renderItem={({item})=> (
        <View style={styles.tile}>
       
        </View>
      )}
      />
    )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;


