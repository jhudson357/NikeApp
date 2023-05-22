import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { selectSubtotal } from '../store/cartSlice'
import { selectDeliveryPrice } from '../store/cartSlice'
import { selectTotal } from '../store/cartSlice'

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal)  
  const deliveryFee = useSelector(selectDeliveryPrice)
  const total = useSelector(selectTotal)

  return (
    <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>${subtotal}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>${deliveryFee}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>${total}</Text>
    </View>
  </View>
  )
}

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <>
      <FlatList 
        data={cartItems}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
        style={styles.flatlist}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
  flatlist: {
    marginBottom: 90,
  },
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: 'gainsboro',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500',
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
})