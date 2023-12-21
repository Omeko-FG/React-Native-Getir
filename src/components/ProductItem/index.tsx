import React from "react";
import {
  Dimensions,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Product } from '../../models'

type productItemType = {
    item: Product
}
const { height, width } = Dimensions.get("window");

function index({item}:productItemType) {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.3,
        height: height * 0.25,
        marginLeft: 12,
        marginVertical: 10,
      }}
    >
      <Image
        style={{
          width: width * 0.27,
          height: height * 0.15,
          borderRadius: 10,
          borderWidth: 0.3,
          borderColor: "gray",
        }}
        source={{
          uri: item.image
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 11,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>$</Text>
          <Text>{item.fiyat}</Text>
        </Text>
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}
        >
          <Text>$</Text>
          <Text>{item.fiyatIndirim}</Text>
        </Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 5 }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          marginTop: 4,
          color: "#747990",
        }}
      >
        {item.miktar}
      </Text>
      <TouchableOpacity
        style={{
            position: "absolute",
            borderWidth: 0.3,
            right:0,
            top: -6,
            borderRadius: 5,
            shadowRadius: 3.8,
            shadowOpacity: 0.05,
            borderColor: "lightgrey",
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: 30,
            height: 30,
        }}
      >
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default index;
