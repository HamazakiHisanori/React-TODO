import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClick1, onClick2 } = props;
  return (
    <div className="incomplete-area">
      <h2 className="title">未完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list">
              <p>{todo}</p>
              <button onClick={() => onClick1(index)}>完了</button>
              <button onClick={() => onClick2(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
