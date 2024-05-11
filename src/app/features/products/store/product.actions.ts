import { createAction } from "@ngrx/store";

export const createProduct = createAction("[Product] createProduct");
export const createProductSuccess = createAction(
  "[Product] createProductSuccess"
);
export const createProductFail = createAction("[Product] createProductFail");
