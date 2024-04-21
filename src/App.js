import React from 'react';
import initialData from './initail-data';
import Column
  from './coulumn';

import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
const App = () => {
  const data = initialData;
  const onDragEnd = result => {

  }
  return (
    <DragDropContext onDragEnd={onDragEnd} >
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map(taskId => data.tasks[taskId]);


        return <Column key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>

  )

};
export default App;
