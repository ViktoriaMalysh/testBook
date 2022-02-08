import { createSlice } from '@reduxjs/toolkit';

export const initState = () => {
  const rooms = {
    rooms: [
      { id: 1, time: 120 },
      { id: 2, time: 120 },
      { id: 3, time: 120 },
      { id: 4, time: 120 },
      { id: 5, time: 120 },
      { id: 6, time: 120 },
      { id: 7, time: 120 },
      { id: 8, time: 120 },
      { id: 9, time: 120 },
    ]
  }
  return rooms
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    decrement: state => {
      state.rooms.time -= 1;
    },
    init: state => state = initState
  },
});

export const { decrement, init } = counterSlice.actions;

export const selectCount = state => state.counter.rooms.time;

export const selectRooms = state => state.counter.rooms;



export default counterSlice.reducer;
