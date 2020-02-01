import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import TaskCard from "./TaskCard";
import TaskActionButton from "./TaskActionButton";

const TaskListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  height: 100%;
  padding: 10px;
  margin-right: 8px;
`;

const TaskList = ({ workflow, tasks }) => {
  return (
    <Droppable droppableId={String(workflow.id)}>
      {provided => (
        <TaskListContainer {...provided.droppableProps} ref={provided.innerRef}>
          <h3>{workflow.title}</h3>
          {tasks.map((item, index) => {
            return <TaskCard key={item.id} task={item} index={index} />;
          })}
          <TaskActionButton projectId={workflow.project_id} />

          {provided.placeholder}
        </TaskListContainer>
      )}
    </Droppable>
  );
};

export default TaskList;
