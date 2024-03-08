import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./homeReducer";
import {createReducer} from './loginReducer'
import {sigINReducer}from './userLoginReducer'
import {cartReducer} from './cardReducer'
import {uploadReducer} from './uploadProductReducer'
export const store = configureStore({
  reducer: {homeReducer,createReducer,sigINReducer,cartReducer,uploadReducer}
});
