import React, { Component } from "react";

import styles from "./App.module.css";
import Card from "./components/Card/Card";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Layout from "./hoc/Layout/Layout";
class App extends Component {
  componentDidMount() {
    this.props.onFetchPromotions();
  }

  render() {
    let cards = <span>Loading... </span>;
    if (this.props.promotions) {
      cards = this.props.promotions.map(promotion => (
        <Card
          key={promotion.id}
          url={promotion.picture}
          title={promotion.skin}
          price={promotion.price}
        />
      ));
    }
    return (
      <Layout>
        <div className={styles.App}>{cards}</div>
      </Layout>
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
  return {
    onFetchPromotions: () => dispatch(actions.fetchPromotions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
