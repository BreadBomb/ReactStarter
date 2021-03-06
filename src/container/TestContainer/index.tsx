import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ITestState} from "./state";
import {SetExample} from "./actions";
import ReducerRegistry from "../../utils/reducerRegistry";
import reducer, {reducerName} from "./reducer";

interface ITestContainerProps {
    example: string,
    setExample: () => {}
}

ReducerRegistry.register(reducerName, reducer);

const TestContainer: React.FC<ITestContainerProps> = (props: ITestContainerProps) => {
    const {example} = props;
    return (
        <div>TestContainer works! <br /><span>{example}</span></div>
    );
};

const mapStateToProps = (state: any) => {
    const reducerState = state[reducerName];

    return {
        example: reducerState.example
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setExample: () => dispatch(SetExample("test"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);


