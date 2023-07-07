// store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface MyDetails {
  [key: string]: string | File | null;
}
const initialState: MyDetails = {
    username: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    geolocation:"",
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    updateDetails: (state, action: PayloadAction<MyDetails>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateDetails } = detailsSlice.actions;

const store = configureStore({
    reducer: {
      details:detailsSlice.reducer
  },
});

export { store };
