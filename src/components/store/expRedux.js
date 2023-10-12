import { createSlice } from '@reduxjs/toolkit';

const expenseState = {
  amounts: 0,
  descriptions: '',

  categorys: '',
  activatePremium: false,
};


const expenseSlice = createSlice({
  name: 'expense',
  initialState: expenseState,
  reducers: {
    descriptions(state, action) {
      state.descriptions = action.payload;
    },
    amounts(state, action) {
      state.amount = action.payload;
    },
    
    categorys(state, action) {
      state.categorys = action.payload;
    },
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;
