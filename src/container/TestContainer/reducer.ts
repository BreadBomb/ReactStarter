import {AnyAction} from "redux";
import ReducerRegistry from "../../utils/reducerRegistry";
import {ITestState} from "./state";
import produce from "immer";
import {TEST_EXAMPLE} from "./constants";

const reducerName = 'Test';

const initialState: ITestState = {
  example: "test"
};

export default function reducer(state = initialState, action: AnyAction) {
    return produce(state, (draft: ITestState) => {
        switch (action.type) {
            case TEST_EXAMPLE:
                draft.example = action.text;
                break;
            default:
                return state;
        }
    });
}

ReducerRegistry.register(reducerName, reducer);