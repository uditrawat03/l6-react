import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import CreateCompanyComponent from "./CreateCompanyComponent";
import api from "../../../../services/api";

class CreateCompany extends Component {
  submit = data => {
    return api.service.post("crm/companies/store", { data }).then(() => {
      this.props.history.push("/crm/companies");
    });
  };

  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="eleven wide column">
            <Segment>
              <CreateCompanyComponent submit={this.submit} />
            </Segment>
          </div>
          {/* <div className="five wide column">
              <Segment>
                <CompanySearchComponent />
              </Segment>
            </div> */}
        </div>
      </div>
    );
  }
}

CreateCompany.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default CreateCompany;
