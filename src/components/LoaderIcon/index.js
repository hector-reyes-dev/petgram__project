import React from "react";
import "./styles.css";

class LoaderIcon extends React.Component {
  render() {
    return (
      <Loader class="lds-ripple">
        <div></div>
        <div></div>
      </Loader>
    );
  }
}

export default LoaderIcon;
