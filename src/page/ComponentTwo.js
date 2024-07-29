import React from "react";
import ComponentThree from "./ComponentThree";

class ComponentTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ComponentThree
        size={this.props.size}
        shade={this.props.color}
        big={this.props.shape}
        />
    );
  }
}

export default ComponentTwo;
