import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=400&h=300&cc=1&webp=1&q=75',
      quantity: 1,
      totalPrice: 549,
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((prod) => prod.id === id);
      if (product) {
        product.quantity = quantity;
        product.totalPrice = product.price * quantity;
      }
    },
  },
});

export const { updateQuantity } = productsSlice.actions;
export default productsSlice.reducer;
