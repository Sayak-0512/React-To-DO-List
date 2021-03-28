import React, {useState} from "react";

function App() {
  const [list, setList]=useState([]);
  const [newItem, setnewItem]=useState("");
  function handleChange(event){
    setnewItem(event.target.value);
  }
  function handleClick(){
    setList(prevValue => {
      return [...prevValue,newItem];
    });
    setnewItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={newItem} onChange={handleChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {list.map(curListItem => (<li>{curListItem}</li>))}

        </ul>
      </div>
    </div>
  );
}

export default App;
