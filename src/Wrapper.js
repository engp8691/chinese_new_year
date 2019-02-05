import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addNumber, removeNumber, toggleImage } from './actions';
import Link from './Link';
import Celebrate from './Celebrate';

import './App.css';

let maxNumber = 1;

class Wrapper extends Component {
	constructor(props){
		super(props);
		this.state = {redNumber: 0};
	}

	shouldComponentUpdate(nextState, nextProps){
		return true;
	}

	componentWillUpdate(nextProps, nextState){
		return true;
	}

	componentDidUpdate(prevProps, prevState){
		if(prevProps.numbers.numbers.length !== this.props.numbers.numbers.length){
			this.setState({redNumber: 0});
		}
		if(prevProps.imageVisibility.todisplay !== this.props.imageVisibility.todisplay){
			if(prevProps.imageVisibility.todisplay === true){
				this.setState({redNumber: 0});
			}
		}
	}

	handleClick = (e) => {
		if(this.props.imageVisibility.todisplay) return;

		let { target } = e;
		let { textContent } = target;

		if(!isNaN(textContent)){
			textContent = parseInt(textContent);
		}

		if(this.props.numbers.luckyNumber === textContent){
			this.props.toggleImage(true);
		}
		this.setState({redNumber: textContent});
	};

	addNumber = (e) => {
		maxNumber++;
    	this.props.addNumber(maxNumber);
	}

	removeNumber = (e) => {
		this.props.removeNumber(maxNumber);
		if(maxNumber>0){
			maxNumber--;
		}
	}

	render() {
		console.log(68, "rendering function");

		const AllLinks = this.props.numbers.numbers.map((elem, index, array)=>{
			let isSelected = false;
			if(elem === this.state.redNumber){
				isSelected = true;
			}
			let tail = (<span>=></span>);
			if(index === array.length-1){
				tail = null;
			}
			let divKey = "div" + elem;
			return (<Fragment key={divKey}><Link onClick={this.handleClick} selected={isSelected}>{elem}</Link> {tail} </Fragment> );
		});

		return (
			<Fragment>
			<div className="greetings">
				<span>看看您的手气如何，选择您的幸运号码，试试需要几次才能选到惊喜。</span>
			</div>
			<div className="wrapper">
				<Celebrate display={this.props.imageVisibility.todisplay} />
				<br/><br/>
				{AllLinks}
			</div>
			<div className="greetings">
				<span>增减数字变化难度：</span>
				<img className="buttonImg" src="plus.png"  alt="" onClick={this.addNumber}/>
				<img className="buttonImg" src="minus.png" alt="" onClick={this.removeNumber}/>
			</div>
			</Fragment>

		);
	}
}

const mapStateToProps = function(state, ownProps) {
	return {...state };
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
		addNumber: (number) => dispatch(addNumber(number)),
		removeNumber: (number) => dispatch(removeNumber(number)),
        toggleImage: (flag) => dispatch(toggleImage(flag))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
