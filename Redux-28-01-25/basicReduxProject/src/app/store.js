import { configureStore } from '@reduxjs/toolkit';
import basicSlice from '../features/basic/slicer';

export const store = configureStore({
    reducer: {
        basic: basicSlice,
    },
});