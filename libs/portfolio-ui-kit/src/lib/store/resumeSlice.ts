import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { resumeData } from '../data/resumeData';
import { Resume } from '../types/resume';

export interface ResumeState {
  data: Resume;
  loading: boolean;
  error: string | null;
}

const initialState: ResumeState = {
  data: resumeData,
  loading: false,
  error: null,
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setResumeData: (state, action: PayloadAction<Resume>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setResumeData, setLoading, setError } = resumeSlice.actions;
export default resumeSlice.reducer;

// Selectors
export const selectResume = (state: { resume: ResumeState }) => state.resume.data;
export const selectResumeLoading = (state: { resume: ResumeState }) => state.resume.loading;
export const selectResumeError = (state: { resume: ResumeState }) => state.resume.error;
