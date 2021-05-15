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

export const { setShopItems } = shopSlice.actions

export const selectShopItems = (state) => state.shop.items
export const selectShopCart = (state) => state.shop.cart

export default shopSlice.reducer
