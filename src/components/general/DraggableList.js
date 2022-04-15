import React, { forwardRef, useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AiFillDelete } from 'react-icons/ai';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';
import { IngredientsListElement } from '../form/IngredientsListElement';
import { InfoBadge } from '../helpers/InfoBadge';

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
    <>
      <InfoBadge
        text='Upraviť poradie ingrediencií'
        classes='mb-3'
        toolTip
        toolID='dragToolInfo'
      />
      <DragDropContext onDragEnd={handleOnDragEnd} className>
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
                          <IngredientsListElement contents={rest}>
                            <AiFillDelete
                              onClick={()=>removeItem(id)}
                              size='20'
                              style={{
                                color: 'red',
                                cursor:'pointer',
                              }}
                            />
                          </IngredientsListElement>
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
    </>
  )
})
