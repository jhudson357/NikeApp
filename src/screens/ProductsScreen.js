import { StyleSheet, View, Image, FlatList } from 'react-native'
import products from '../data/products'

const ProductsScreen = () => {
  return (
    <FlatList 
      data={products}
      renderItem={({ item }) => (    // item in {} because each item in products is {}
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
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