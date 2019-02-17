import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListOne from './ListOne/ListOne'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (sourceList , destinationList , targetSource , targetDestination) => {
  const sourceListClone = Array.from(sourceList)
  const destinationListClone = Array.from(destinationList)

  const [removed] = sourceListClone.splice(targetSource.index, 1)

  destinationListClone.splice(targetDestination.index, 0 , removed)

  let result = {};
  result[targetSource.droppableId] = sourceListClone
  result[targetDestination.droppableId] = destinationListClone

  return result
}

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});



// COMP START //

class DragNDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOne: [{word: "Sup?" , id: 1} , {word: "Word!" , id: 2} , {word: "Groovy!" , id: 3} , {word: "Far Out!" , id: 4} , {word: "Klingon!" , id: 5} ] ,
      listTwo: [{word: "Sup?" , id: 6} , {word: "Word!" , id: 7} , {word: "Groovy!" , id: 8} , {word: "Far Out!" , id: 9} , {word: "Klingon!" , id: 10} ]
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  getList = (id) => this.state[id]

  onDragEnd(result) {
    const { source , destination } = result
    
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if(source.droppableId === destination.droppableId){

    let list = null;

    switch(result.source.droppableId){
      case "listOne" :
        list = "listOne"
        break;
      case "listTwo" :
        list = "listTwo"
        break;
    }

    const newList = reorder(
      this.state[list],
      result.source.index,
      result.destination.index
    );

    this.setState({
      [list]: newList
    });
  } else {
    let result = move(
      this.getList(source.droppableId),
      this.getList(destination.droppableId),
      source ,
      destination 
    )

    this.setState({
      listOne: result.listOne ,
      listTwo: result.listTwo
    })
  }
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <ListOne listOne={this.state.listOne} getListStyle={getListStyle} getItemStyle={getItemStyle} />
        {/* <Droppable droppableId="listOne">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.listOne.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
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
        </Droppable> */}
        <Droppable droppableId="listTwo">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.listTwo.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
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
      </DragDropContext>
    );
  }
}

export default DragNDrop
