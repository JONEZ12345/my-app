import React from "react";

class ComponentFour extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <h2>
          I have {this.props.size} {this.props.shade} {this.props.big} Car!
        </h2>

        
      </>
    );
  }
}

export default ComponentFour;
