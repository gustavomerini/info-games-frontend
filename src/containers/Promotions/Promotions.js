import React, { Component } from "react";
import Card from "../../components/Card/Card";
import styles from "./Promotions.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions"

class Promotions extends Component {
  state = {};

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
    return <div className={styles.Cards}>{cards}</div>;
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
)(Promotions);
