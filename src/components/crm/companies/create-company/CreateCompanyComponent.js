import React, { Component } from "react";
import { Dropdown, Form, Button } from "semantic-ui-react";

class CreateCompanyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      masters: {
        companySource: [],
        companyImportance: [],
        companyClass: [],
        code: "",
        name: ""
      }
    };
  }

  componentWillMount() {
    this.props
      .getMasters("company-source,company-class,company-importance")
      .then(res => {
        this.setState({
          masters: res.data
        });
      });
  }

  render() {
    const { code, name } = this.state;
    const friendOptions = [
      {
        key: "Jenny Hess",
        text: "Jenny Hess",
        value: "Jenny Hess",
        image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
      },
      {
        key: "Elliot Fu",
        text: "Elliot Fu",
        value: "Elliot Fu",
        image: { avatar: true, src: "/images/avatar/small/elliot.jpg" }
      },
      {
        key: "Stevie Feliciano",
        text: "Stevie Feliciano",
        value: "Stevie Feliciano",
        image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
      },
      {
        key: "Christian",
        text: "Christian",
        value: "Christian",
        image: { avatar: true, src: "/images/avatar/small/christian.jpg" }
      },
      {
        key: "Matt",
        text: "Matt",
        value: "Matt",
        image: { avatar: true, src: "/images/avatar/small/matt.jpg" }
      },
      {
        key: "Justen Kitsune",
        text: "Justen Kitsune",
        value: "Justen Kitsune",
        image: { avatar: true, src: "/images/avatar/small/justen.jpg" }
      }
    ];
    return (
      <Form>
        <Form.Field>
          <label htmlFor="code">Code</label>
          <input type="search" label="code" name="code" value={code} />
        </Form.Field>
        <Form.Field>
          <label htmlFor="name">Name</label>
          <input type="search" label="Name" name="name" value={name} />
        </Form.Field>
        <Form.Field>
          <label htmlFor="companySource">Company Source</label>
          <Dropdown
            selection
            fluid
            placeholder="Company Search"
            options={friendOptions}
            name="companySource"
          />
        </Form.Field>
        <Button primary> Search</Button>
      </Form>
    );
  }
}

export default CreateCompanyComponent;
