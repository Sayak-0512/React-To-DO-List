import React from "react";


function Todoitems(props){

  return (<div onClick={() => (props.handleDelete(props.id))}>
    <li>{props.curListItem}</li>
    </div>)
}

export default Todoitems;
