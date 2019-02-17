import React from "react";
import { Droppable , Draggable } from 'react-beautiful-dnd'

export default function(props){
  return (

    <Droppable droppableId="listOne">
  {(provided, snapshot) => (
    <div
    ref={provided.innerRef}
    style={props.getListStyle(snapshot.isDraggingOver)}
    >
      {props.listOne.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={props.getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
              )}
              >
              {item.word}
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
  )}
</Droppable>
)
}