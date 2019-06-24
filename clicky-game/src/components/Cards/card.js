import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="col-3">
      <div className="card">
        <img alt={props.name} class="card-img-top"
          src={props.image} id={props.id} onClick={() => props.scoreBoardFunction(props.id)} className='shuffleScore'/>
      </div>
   </div>
  )
}

export default Card;