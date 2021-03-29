import React, {useState} from "react";
import Todoitems from "./Todoitems";
import InputArea from "./InputArea";
function App() {
  const [list, setList]=useState([]);

  function handleClick(newItem){
    setList(prevValue => {
      return [...prevValue,newItem];
    });

  }

  function deleteItem(id){
    setList(prevValue => {
    return  prevValue.filter((item,index) => {
        return index!==id
      })
    })
  }





  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea  handleClick={handleClick} />
      <div>
        <ul>
        {list.map((curListItem,index) => (<Todoitems curListItem={curListItem} handleDelete={deleteItem} key={index} id={index}/>))}

        </ul>
      </div>
    </div>
  );
}

export default App;
