import { StyleSheet, Pressable, Image, FlatList } from 'react-native'
import products from '../data/products'
import { useNavigation } from '@react-navigation/native'

const ProductsScreen = () => {
  const navigation = useNavigation()

  return (
    <FlatList 
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Pressable 
          onPress={() => navigation.navigate('Product Details')} 
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%', 
    aspectRatio: 1,
  },
})