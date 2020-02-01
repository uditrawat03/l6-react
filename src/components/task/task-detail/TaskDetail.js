import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Header,
  Rail,
  Ref,
  Segment,
  Sticky,
  Placeholder
} from "semantic-ui-react";
import { fetchTask } from "../../../actions/TaskAction";

class TaskDetail extends Component {
  state = { active: true };

  componentDidMount() {
    this.getTask(this.props.match.params.id);
  }

  getTask = id => {
    this.props.fetchTask(id);
  };

  contextRef = createRef();

  render() {
    const task = this.props.task ? (
      <Grid columns={2}>
        <Ref innerRef={this.contextRef}>
          <Grid.Row>
            <Grid.Column width={"twelve"}>
              <Segment>
                <div>
                  <Header>{this.props.task.summary}</Header>
                  <Placeholder basic>{this.props.task.description}</Placeholder>
                </div>
                {/* <Rail position="left" style={{ marginTop: "7em" }}>
                  <Sticky context={this.contextRef}>
                    <Header as="h3">Stuck Content</Header>
                  </Sticky>
                </Rail> */}
                <Rail position="right" style={{ marginTop: "7em" }}>
                  <Sticky context={this.contextRef}>
                    <Header as="h3">Stuck Content</Header>
                  </Sticky>
                </Rail>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Ref>
      </Grid>
    ) : (
      ""
    );
    return <div>{task}</div>;
  }
}

function mapStateToProps(state, props) {
  let task = null;

  if (props.match.params.id) {
    task = state.tasks.find(item => {
      return item.id === parseInt(props.match.params.id);
    });
  }

  return {
    task,
    task_id: props.match.params.id
  };
}

export default connect(mapStateToProps, { fetchTask })(TaskDetail);
