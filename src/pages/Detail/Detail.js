import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error';

const Detail = ({route}) => {
  const {id} = route.params;
  const [loading, error, data] = useFetch(`${Config.API_PRODUCT_URL}/${id}`);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={style.container}>
      <Image source={{uri: data.image}} style={style.image} />
      <View style={style.body_container}>
        <Text style={style.title}>{data.title}</Text>
        <Text style={style.desc}>{data.description}</Text>
        <Text style={style.price}>{data.price}</Text>
      </View>
    </View>
  );
};

export default Detail;
