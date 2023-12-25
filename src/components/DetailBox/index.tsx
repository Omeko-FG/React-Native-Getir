import React from 'react'
import { Text, View } from 'react-native'

type DetailBoxPorps = {
    price: number
    name: String
    quantity: String
}

function index({price,name,quantity}:DetailBoxPorps) {
  return (
    <View style={{width:"100%",backgroundColor:"white",alignItems:"center"}}>
        <Text style={{color:"#5D3EBD",fontWeight:"bold",marginTop:12,fontSize:19}}>
            ${price}
        </Text>
        <Text style={{fontWeight:"600",fontSize:16,marginTop:12}}>{name}</Text>
        <Text style={{fontWeight:"600",fontSize:16,marginTop:6,paddingBottom:16,color:"#848897"}}>{quantity}</Text>
    </View>
  )
}

export default index