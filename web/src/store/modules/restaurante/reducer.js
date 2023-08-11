import { createReducer } from '@reduxjs/toolkit';
import types from './types';

const INITIAL_STATE = {
  mesasCafe: [],
  mesasPub: [],
  mesasJardim: [],
  mesa: {
    numero: 0,
    quantidaDePessoas: 0,
    etapas: [0,0,0,0,0,0,0,0],
  },
  components: {
    drawer: false,
  },
  loading: false,
  error: false,
};

export const restaurante = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(types.UPDATE_TABLE, (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  });
});