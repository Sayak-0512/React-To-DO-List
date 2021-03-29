import React,{useState} from "react";

function InputArea(props) {
  const [newItem, setnewItem]=useState("");
  function handleChange(event){
    setnewItem(event.target.value);
  }
  return (
    <div className="form">
      <input type="text" value={newItem} onChange={handleChange}/>
      <button onClick={() => {props.handleClick(newItem);
      setnewItem("");}}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
