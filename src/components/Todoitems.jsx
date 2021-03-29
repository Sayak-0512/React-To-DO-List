import React, {useState} from "react";


function Todoitems(props){
  const [state,setState]=useState(false);
  function handleClick(){
    setState(!state);
  }
  return (<div onClick={handleClick}>
    {state===false?<li>{props.curListItem}</li>:<li style={{textDecoration: "line-through"}}>{props.curListItem}</li>}
    </div>)
}

export default Todoitems;
