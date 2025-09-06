import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  loading: boolean;
  month: string;
}

const initialState: UIState = {
  loading: false,
  month: new Date().toISOString().slice(0, 7),
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setMonth: (state, action: PayloadAction<string>) => {
      state.month = action.payload;
    },
  },
});

export const { setLoading, setMonth } = uiSlice.actions;
export default uiSlice.reducer;
