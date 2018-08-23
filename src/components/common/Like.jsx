import React, { Component } from "react";

class Like extends Component {
  state = {
    liked: false
  };
  handleOnClick = liked => {
    console.log("like icon cliked", liked);
    if (!this.state.liked) return this.setState({ liked: true });
    return this.setState({ liked: false });
  };
  getLikeIconClasses() {
    let iconClasses = "fa fa-heart";
    iconClasses += this.state.liked ? iconClasses : "-o";
    return iconClasses;
  }
  render() {
    return (
      <i
        onClick={() => this.handleOnClick(this.props.liked)}
        className={this.getLikeIconClasses()}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
