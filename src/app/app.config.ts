import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { productReducer } from "./features/products/store/product.reducers";
import { ProductEffects } from "./features/products/store/product.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(productReducer),
    provideEffects(ProductEffects),
  ],
};
