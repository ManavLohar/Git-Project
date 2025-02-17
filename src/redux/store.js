import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
setupListeners;

export const store = configureStore({
  reducer: {},
});

setupListeners(store.dispatch);
