import { createSlice } from '@reduxjs/toolkit';

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: {},
  reducers: {
    adicionarUsuario: (_, { payload }) => {
      return payload;
    },
  },
});

export const { adicionarUsuario } = usuarioSlice.actions;

export default usuarioSlice.reducer;
