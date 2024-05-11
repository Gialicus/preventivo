import { createReducer, on } from "@ngrx/store";
import {
  createProduct,
  createProductFail,
  createProductSuccess,
} from "./product.actions";

const initial = {};

export const productReducer = createReducer(
  initial,
  on(createProduct, (state) => state),
  on(createProductSuccess, (state) => state),
  on(createProductFail, (state) => state)
);
