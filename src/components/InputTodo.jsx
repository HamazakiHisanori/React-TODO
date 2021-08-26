import React from "react";

const style = {
  backgroundColor: "aqua",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { text, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="TODOを入力" value={text} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
