import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  /*componentDidUpdate(prevProps) {
    console.log('hace un refresh on tope')
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }*/
  UNSAFE_componentWillMount() { 
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);