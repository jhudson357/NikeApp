import { StyleSheet, View, Image, FlatList, Text, ScrollView, Pressable } from "react-native"
import { useWindowDimensions } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { cartSlice } from "../store/cartSlice"

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct)
  const dispatch = useDispatch()

  const { width } = useWindowDimensions()

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({product: product}))
  }

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList 
          data={product.images}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Image 
              source={{ uri: item }} 
              style={{width: width, aspectRatio: 1}} 
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>

      {/* Navigation icon */}
      {/* <Pressable style={styles.icon}>
        <Ionicons name="close" size={24} color="white" />
      </Pressable> */}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginTop: 10,
    marginBottom: 90,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button:{
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#000000AA',
    borderRadius: 50,
    padding: 5,
  }
})

export default ProductDetailsScreen