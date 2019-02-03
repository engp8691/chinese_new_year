import React, { Component, Fragment } from 'react';
import Link from './Link';
import Celebrate from './Celebrate';

import './App.css';

class Wrapper extends Component {
	constructor(props){
		super(props);
		let luckyNumber = Math.floor(Math.random() * 10);
		luckyNumber += 1;
		this.state = {numbers: props.numbers, redNumber: -1, display: false, luckyNumber: luckyNumber};
	}

	handleClick = (e) => {
		if(this.state.display) return;

		let { target } = e;
		let { textContent } = target;

		console.log(12, target, textContent, this.state.luckyNumber);
		if(!isNaN(textContent)){
			textContent = parseInt(textContent);
		}

		let display = false;
		if(this.state.luckyNumber === textContent){
			display = true;
		}

		this.setState({redNumber: textContent, display: display});
	};

	handleCelebrateClick = (e) => {
		let luckyNumber = Math.floor(Math.random() * 10);
		this.setState({display: false, luckyNumber: luckyNumber});
	}

	render() {
		const AllLinks = this.state.numbers.map((elem, index, array)=>{
			// console.log(21, elem, this.state.redNumber, index, array.length);
			let isSelected = false;
			if(elem === this.state.redNumber){
				console.log(24, elem);
				isSelected = true;
			}
			let tail = (<span>=></span>);
			if(index === array.length-1){
				tail = null;
			}
			let divKey = "div" + elem;
			return (<Fragment key={divKey}><Link onClick={this.handleClick} selected={isSelected}>{elem}</Link> {tail} </Fragment> );
		});

		console.log(41, this.state.display);
		
		return (
			<Fragment>
			<div className="greetings">
				<span>看看您的手气如何，选择你的幸运号码，有惊喜</span>
			</div>
			<div className="wrapper">
				<Celebrate display={this.state.display} hanleClick={this.handleCelebrateClick}/>
				<br/><br/>
				{AllLinks}
			</div>
			</Fragment>
		);
	}
}

export default Wrapper;
