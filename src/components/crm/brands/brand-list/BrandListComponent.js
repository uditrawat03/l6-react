import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as brandActions from "../../../../actions/Brand";
const Grid = React.lazy(() => import("../../../../services/Grid"));

class BrandListComponent extends Component {
  getData = (page, limit) => {
    this.props.getBrandList("").then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <Suspense fallback={<div>Loading....</div>}>
        <Grid getData={this.getData} />
      </Suspense>
    );
  }
}

BrandListComponent.propTypes = {
  getBrandList: PropTypes.func.isRequired
};

export default connect(null, { getBrandList: brandActions.getBrandList })(
  BrandListComponent
);
