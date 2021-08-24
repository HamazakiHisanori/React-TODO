import "./styles.css";
import React from "react";
import { useState } from "react";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["リスト", "リスト2"]);
  const [completeTodos, setCompleteTodos] = useState(["リスト3"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <h2 className="title">未完了のTODO</h2>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <h2 className="title">完了したTODO</h2>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list">
                <p>{todo}</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
