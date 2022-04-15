import React, { forwardRef, useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { IngredientsListElement } from '../form/IngredientsListElement';

export const DraggableList = forwardRef(({contents, removeItem}, newOrderRef) => {

  const [dragArray, setDragArray] = useState(contents);
  useEffect(()=> {
    setDragArray(contents)
  }, [contents])

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(dragArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setDragArray(items);
    newOrderRef.current = items;
  }

  return (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='ingredients'>
          {(provided) => (
            <div
              className='ingredients'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <ListGroup>
              {dragArray.map(({id, ...rest}, i) => {
                return (
                  <Draggable
                    key={id}
                    index={i}
                    draggableId={id}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ListGroupItem>
                          <span onClick={()=>removeItem(id)} >x</span>
                          <IngredientsListElement contents={rest}/>
                        </ListGroupItem>
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
              </ListGroup>
            </div>
          )}
        </Droppable>
      </DragDropContext>

  )
})