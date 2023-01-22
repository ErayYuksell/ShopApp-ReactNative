import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#eeeeee',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100, // yüksekliği silersem yanındaki child ne kadar
    // yer kaplıyorsa okadar kaplar min 100 veriyorum childi daha büyükse daha büyüyebilir
    resizeMode: 'contain', //fotonun ölçülerine göre ayarlanır
    backgroundColor: 'white',
  },
  body_container: {padding: 10, flex: 1, justifyContent: 'space-between'},
  title: {fontWeight: 'bold', fontSize: 18},
  price: {textAlign: 'right', fontSize: 16, fontStyle: 'italic'},
});
