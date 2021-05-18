import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from 'firebase-config'

export const getUserCart = createAsyncThunk(
  'shop/getUserCart',
  async (userUid) => {
    const results = await db.collection('users').doc(userUid).get()
    return results.data().cart
  }
)

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    items: [],
    cart: [],
    totalAmount: 0,
    status: null,
  },
  reducers: {
    setShopItems: (state, { payload }) => {
      state.items = payload
    },
    incrementQuantity: (state, { payload }) => {
      const item = state.cart.find((item) => item.id === payload)
      item.quantity = item.quantity + 1
    },
    decrementQuantity: (state, { payload }) => {
      const item = state.cart.find((item) => item.id === payload)
      item.quantity = item.quantity - 1
    },
  },
  extraReducers: {
    [getUserCart.pending]: (state) => {
      state.status = 'loading'
    },
    [getUserCart.fulfilled]: (state, { payload }) => {
      state.cart = payload
      state.status = 'success'
    },
    [getUserCart.rejected]: (state) => {
      state.status = 'falied'
    },
  },
})

export const { setShopItems, incrementQuantity, decrementQuantity } = shopSlice.actions

export const selectShopItems = (state) => state.shop.items
export const selectShopCart = (state) => state.shop.cart

export default shopSlice.reducer
