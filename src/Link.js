import React from 'react';
import './App.css';

const Link = (props) => {
	let selectedClass = "link";
	if(props.selected){
		selectedClass = "redlink";
	}
	return (
      <div className={selectedClass} onClick={props.onClick}>
	  	{props.children}
      </div>
    );
}

export default Link;
