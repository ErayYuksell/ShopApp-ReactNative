import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import style from './ProductCard.style';
//touchablewithoutfeedback card lar tıklanabilir oluyor ancak tıklama efekti gelmiyo aşağı kaydırırken sıkıntı olamsın diye
const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={style.container}>
        <Image style={style.image} source={{uri: product.image}} />
        <View style={style.body_container}>
          <Text style={style.title}>{product.title}</Text>
          <Text style={style.price}>{product.price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
