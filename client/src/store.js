import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './redux/cart/cartSlice'
import productsReducer from './redux/product/productsSlice'
import productReducer from './redux/product/productSlice'
import cartReducer from './redux/cart/cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
  },
})