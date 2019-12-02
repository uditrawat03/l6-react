import React, { Component } from "react";
import CreateCompanyComponent from "./CreateCompanyComponent";
import { MasterConsumer } from "../../../../context/MasterContext";
import { Segment } from "semantic-ui-react";

class CreateCompany extends Component {
  render() {
    return (
      <MasterConsumer>
        {value => {
          return (
            <div className="ui grid">
              <div class="row">
                <div className="column">
                  <Segment>
                    <CreateCompanyComponent
                      getMasters={value.getMasters}
                      masters={value.masters}
                    />
                  </Segment>
                </div>
              </div>
            </div>
          );
        }}
      </MasterConsumer>
    );
  }
}

export default CreateCompany;
