import { createReducer } from '@reduxjs/toolkit';
import types from './types';

const INITIAL_STATE = {
  mesasCafe: localStorage.getItem('mesasCafe') ? JSON.parse(localStorage.getItem('mesasCafe')) : [],
  mesasPub: localStorage.getItem('mesasPub') ? JSON.parse(localStorage.getItem('mesasPub')) : [],
  mesasJardim: localStorage.getItem('mesasJardim') ? JSON.parse(localStorage.getItem('mesasJardim')) : [],
  mesa: {
    numero: 0,
    quantidaDePessoas: 0,
    etapas: [0, 0, 0, 0, 0, 0, 0, 0],
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