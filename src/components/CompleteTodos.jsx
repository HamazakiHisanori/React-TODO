import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <h2 className="title">完了したTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list">
              <p>{todo}</p>
              <button onClick={() => onClick(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
