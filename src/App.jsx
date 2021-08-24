import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div>
        <h2>未完了のTODO</h2>
        <ul>
          <li>
            <p>リスト</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <p>リスト2</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>

      <div>
        <h2>完了したTODO</h2>
        <ul>
          <li>
            <p>リスト</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
