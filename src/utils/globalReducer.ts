import {ITestState} from "../container/TestContainer/state";
import {AnyAction} from "redux";
import produce from "immer";
import {TEST_EXAMPLE} from "../container/TestContainer/constants";
import {IGlobalState} from "./globalState";

const reducerName = 'global';

const initialState: IGlobalState = {};

export default function globalReducer(state = initialState, action: AnyAction) {
    return produce(state, (draft: IGlobalState) => {
        switch (action.type) {
            default:
                return state;
        }
    });
}
