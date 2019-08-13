import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ITestState} from "./state";
import {SetExample} from "./actions";

interface ITestContainerProps {
    example: string,
    setExample: () => {}
}

const TestContainer: React.FC<ITestContainerProps> = (props: ITestContainerProps) => {
    const { example } = props;
    return (
        <div>TestContainer works! <span>{example}</span></div>
    );
};

const mapStateToProps = (state: ITestState) => {
  return {
      example: state.example
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
      setExample: () => dispatch(SetExample("test"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);


