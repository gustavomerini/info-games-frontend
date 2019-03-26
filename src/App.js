import React, { Component } from "react";

import styles from "./App.module.css";
import Card from "./components/Card/Card";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div class={styles.App}>
        {this.props.promotions.map(promotion => (
          <Card
            url={promotion.img}
            title={promotion.name}
            price={promotion.price}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    freeWeek: state.freeWeekReducer.freeWeek,
    promotions: state.promotionsReducer.promotions
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
