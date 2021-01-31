import React from 'react';
import TodoItemCreator from './todoItemCreator';
import TodoItem from './todoItem';
import {useRecoilValue} from 'recoil';
import {filteredTodoListState} from './selector';
import TodoListStats from './todoListStats';
import TodoListFilters from './todoListFilters';

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
      <>
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />
  
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
}

export default TodoList;