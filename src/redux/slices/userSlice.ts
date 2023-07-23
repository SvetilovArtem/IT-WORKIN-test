import { createSlice } from '@reduxjs/toolkit'
import { DataType } from '../../types/types'

export interface ISliceState {
  users: DataType[],
  deleteItemMode: boolean
}

const initialState: ISliceState = {
  users: [],
  deleteItemMode: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [ ...state.users, action.payload ]
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    toggleDeleteItemMode: (state, action) => {
      state.deleteItemMode = action.payload
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => (user.firstName !== action.payload.firstName) && (user.lastName !== action.payload.lastName) && (user.email !== action.payload.email))
      localStorage.setItem('users', JSON.stringify(state.users))
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, toggleDeleteItemMode, deleteUser } = userSlice.actions

export default userSlice.reducer