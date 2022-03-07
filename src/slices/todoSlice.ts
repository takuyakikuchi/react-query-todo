import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Task } from '../types/types';

interface TaskState {
  selectedTask: Task | null
}

const initialState: TaskState = {
  selectedTask: null,
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setSelectedTask: (state, action: PayloadAction<Task>) => {
      state.selectedTask = action.payload
    },
  },
})

export const { setSelectedTask } = taskSlice.actions

export const selectedTask = (state: RootState) => state.task.selectedTask

export default taskSlice.reducer
