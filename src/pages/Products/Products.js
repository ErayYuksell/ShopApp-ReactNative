import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import Product from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error';

const Products = ({navigation}) => {
  const {loading, error, data} = useFetch(Config.API_PRODUCT_URL);
  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };
  const renderProducts = ({item}) => (
    <Product product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <FlatList data={data} renderItem={renderProducts} />;
};

export default Products;
