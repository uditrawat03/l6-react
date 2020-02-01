import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import TaskList from "../../task/task-list/TaskList";
import TaskActionButton from "../../task/task-list/TaskActionButton";
import { movedTask } from "../../../actions/ProjectWorkflowAction";

const ListContainer = styled.div`
  display: flex;
  flexdirection: row;
`;

class ProjectDetailComponent extends Component {
  state = {
    loading: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.project.id === this.props.project.id) {
      this.setState({
        loading: false
      });
    } else {
      this.setState({
        loading: true
      });
    }
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    this.props.movedTask(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    );
  };

  render() {
    const taskList = this.props.projectWorkflows
      ? this.props.projectWorkflows.map(item => {
          return <TaskList key={item.id} workflow={item} tasks={item.tasks} />;
        })
      : "";

    return (
      <div className="sixteen wide tablet sixteen wide computer column profileheader row no-padding">
        <h1>{this.props.project.title}</h1>
        <p>{this.props.project.description}</p>
        <Segment basic loading={this.state.loading}>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <ListContainer>
              {taskList}
              <TaskActionButton list projectId={this.props.project.id} />
            </ListContainer>
          </DragDropContext>
        </Segment>
      </div>
    );
  }
}

ProjectDetailComponent.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    workflows: PropTypes.arrayOf(PropTypes.shape({})).isRequired
  }).isRequired
};

function mapStateToProps(state, props) {
  return {
    projectWorkflows: state.projectWorkflows
  };
}

export default connect(mapStateToProps, { movedTask })(ProjectDetailComponent);
