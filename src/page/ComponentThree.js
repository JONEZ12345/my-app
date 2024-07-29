import React from "react";
import ComponentFour from "./ComponentFour";

class ComponentThree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ComponentFour
          size={this.props.size}
          shade={this.props.color}
          big={this.props.shape}
        />
      </>
    );
  }
}

export default ComponentThree;
