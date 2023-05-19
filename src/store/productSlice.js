import { createSlice } from '@reduxjs/toolkit'
import products from '../data/products'

const initialState = {
  products: products,  // initialize products state w dummy data from products import
  selectedProduct: null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {    
    //functions that will update the initial state
    // They will get the action and the current state
    // and return the updated state
    setSelectedProduct: (state, action) => {
      // console.log('state', state)
      // console.log('action', action)
      const productId = action.payload
      state.selectedProduct = state.products.find(product => (
        product.id === productId
      )) 
    }
  }  
})