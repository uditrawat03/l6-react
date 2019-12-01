import React from "react";
import { Form, Button } from "semantic-ui-react";

import { CompanyConsumer } from "../CompanyContext";

const CompanySearchComponent = () => {
  return (
    <CompanyConsumer>
      {value => {
        return (
          <Form onSubmit={value.handleSearch}>
            <Form.Field>
              <label htmlFor="code">Code</label>
              <input
                type="search"
                label="code"
                name="code"
                value={value.code}
                onChange={value.handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="name">Name</label>
              <input
                type="search"
                label="Name"
                name="name"
                value={value.name}
                onChange={value.handleOnChange}
              />
            </Form.Field>
            <Button primary> Search</Button>
          </Form>
        );
      }}
    </CompanyConsumer>
  );
};

export default CompanySearchComponent;
