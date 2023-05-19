// redux store
import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './productSlice'

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,  // get access to all the productSlice reducers and the products in the state

  }
})
