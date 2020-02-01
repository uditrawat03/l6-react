import React from "react";
import { connect } from "react-redux";
import { Card, TextArea, Button, Icon } from "semantic-ui-react";
import { saveProjectWorkflow } from "../../../actions/ProjectWorkflowAction";

class TaskActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false
    });
  };

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  saveProjectWorkflow = () => {
    this.props.saveProjectWorkflow({
      project_id: this.props.projectId,
      title: this.state.text
    });
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add Another List" : "Add Another Card";
    const buttonTextOpecity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opecity: buttonTextOpecity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon name="plus" />
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Enter list title..."
      : "Enter title to new task...";

    const buttonText = list ? "Add List" : "Add New Task";

    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidht: 272,
            padding: "6px 8px 2px"
          }}
        >
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleOnChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
            onMouseDown={this.saveProjectWorkflow}
          >
            {buttonText}
          </Button>
          <Icon name="cancel" style={{ marginLeft: 8, cursor: "pointer" }} />
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItem: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    peddingLeft: 4
  },
  formButtonGroup: {
    marginTop: 8,
    dispaly: "flex",
    alignItem: "center"
  }
};

export default connect(null, { saveProjectWorkflow })(TaskActionButton);
