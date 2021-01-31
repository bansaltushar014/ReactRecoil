import React, { Component } from 'react';
import TodoItemCreator from './todoItemCreator';
import TodoItem from './todoItem';
import {useRecoilValue} from 'recoil';
import todoListState from './atom';

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);

    return (
      <>
        {/* <TodoListStats /> */}
        {/* <TodoListFilters /> */}
        <TodoItemCreator />
  
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
}

export default TodoList;