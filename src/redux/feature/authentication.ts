import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface PayloadType {
  payload: {
    data?: any;
    message?: string | any;
    error?: any;
    action?: () => void;
  };
}

export interface IUserDetailsState {
  userDetails: any;
}

const initialState: IUserDetailsState = {
  userDetails: {},
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserDetails: (state: IUserDetailsState, action: PayloadAction<any>) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setUserDetails } = userDetailsSlice.actions;
export const userDetailsSelector = (state: RootState) => state;
export default userDetailsSlice.reducer;
