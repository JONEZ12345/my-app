import React from "react";
import ComponentTwo from "./ComponentTwo";

class ComponentOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ComponentTwo 
          size={this.props.size}
          shade={this.props.color}
          big={this.props.shape}

          />
      </>
    );
  }
}

export default ComponentOne;
