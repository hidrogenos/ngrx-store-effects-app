import * as formPizzas from './../actions/pizzas.action';
import { Pizza } from './../../models/pizza.model';

export interface PizzaState {
    entities: { [id: number]: Pizza };
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: formPizzas.PizzasAction
): PizzaState {
    switch (action.type) {
        case formPizzas.LOAD_PIZZAS: {
            return {
                ...state,
                loading: true
            };
        }

        case formPizzas.LOAD_PIZZAS_SUCCESS: {
            const pizzas = action.payload;

            const entities = pizzas.reduce(
                (entities: { [id: number]: Pizza }, pizza: Pizza) => {
                    return {
                        ...entities,
                        [pizza.id]: pizza
                    };
                },
                {
                    ...state.entities
                }
            );

            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }

        case formPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }
    return state;
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
