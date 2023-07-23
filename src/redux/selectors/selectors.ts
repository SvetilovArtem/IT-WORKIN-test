import { RootState } from './../store';

export const users = (state:RootState) => state.userReducer.users

export const deleteItemMode = (state:RootState) => state.userReducer.deleteItemMode