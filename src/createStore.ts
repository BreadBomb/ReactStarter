import {createStore, combineReducers, StoreEnhancer} from 'redux'
import reducerRegistry from "./utils/reducerRegistry";

declare global {
  interface Window {
      __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

const initialState: any = {};

const combine = (reducers: Array<() => {}>) => {
    const reducerNames = Object.keys(reducers);
    Object.keys(initialState).forEach((item: any) => {
        if (reducerNames.indexOf(item) === -1) {
            reducers[item] = (state = null) => state;
        }
    });
    return combineReducers(reducers);
};

const reducer = combine(reducerRegistry.getReducers());
console.log(reducer);
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

reducerRegistry.setChangeListener((reducers: any) => {
    console.log(reducers);
    store.replaceReducer(combine(reducers));
});

export default store;