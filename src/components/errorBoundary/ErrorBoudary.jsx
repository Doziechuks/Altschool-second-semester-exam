import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
    this.props.navigate("/error");
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  navigate: PropTypes.func.isRequired,
};

export default ErrorBoundary;
