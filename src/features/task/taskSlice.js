import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        const text = action.payload?.text?.trim();
        if (!text) return;
        state.items.push({
          id: action.payload.id,
          text,
        });
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
          },
        };
      },
    },
  },
});

export const { addTask } = taskSlice.actions;
export const selectTasks = (state) => state.tasks.items;
export default taskSlice.reducer;
