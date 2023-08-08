import { createReducer } from '@reduxjs/toolkit';
// import types from './types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export const reducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addDefaultCase((state) => state)
});