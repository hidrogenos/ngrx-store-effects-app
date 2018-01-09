import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector
} from '@ngrx/store';

import * as fromPizzas from './pizzas.reducers';
import { Object } from 'core-js/library/web/timers';

export interface ProductState {
    pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
    pizzas: fromPizzas.reducer
};

export const getProductState = createFeatureSelector<ProductState>('products');

//pizzas state
export const getPizzaState = createSelector(
    getProductState,
    (state: ProductState) => state.pizzas
);

export const getPizzasEntities = createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(getPizzasEntities, entities => {
    console.log('en', entities);
    // return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    return [];
});

export const getPizzasLoaded = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoading
);
