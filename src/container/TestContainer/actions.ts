import {AnyAction} from "redux";
import {TEST_EXAMPLE} from "./constants";

export function SetExample(text: string): AnyAction {
    return {
        type: TEST_EXAMPLE,
        text
    }
}