import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-top: 8px;
`;

const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContainer>
            <Card as={Link} to={`/task/detail/${task.id}`}>
              <Card.Content>
                <Card.Description>{task.summary}</Card.Description>
              </Card.Content>
            </Card>
          </CardContainer>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
