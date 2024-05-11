import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { createProduct, createProductSuccess } from "./product.actions";

@Injectable()
export class ProductEffects {
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProduct),
      exhaustMap(() =>
        of(null).pipe(
          map(() => createProductSuccess()),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
