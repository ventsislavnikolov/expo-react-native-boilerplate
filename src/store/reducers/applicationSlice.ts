import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  abilities: [],
};

const applicationSlice = createSlice({
  initialState,
  name: 'application',
  reducers: {
    setAbilities: (state, action) => ({ ...state, abilities: action.payload }),
  },
});

export const { setAbilities } = applicationSlice.actions;

export default applicationSlice.reducer;

export const getAbilities = (state: any) => state?.application?.abilities;
