import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TabType } from '@/types';

interface ConfigurationState {
  tab: TabType;
}

const initialState: ConfigurationState = {
  tab: 'saveTheDate',
};

export const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<Partial<TabType>>) => {
      state.tab = action.payload;
    },
  },
});

export const { setTab } = configurationSlice.actions;
export default configurationSlice.reducer;
