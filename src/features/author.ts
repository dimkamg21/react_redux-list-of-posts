import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../types/User';

type AuthorState = User | null;

export const authorSlice = createSlice({
  name: 'author',
  initialState: null as AuthorState,
  reducers: {
    set: (_, action: PayloadAction<User>) => action.payload,
    clearAuthor: () => null,
  },
});

export const { set, clearAuthor } = authorSlice.actions;

export default authorSlice.reducer;
