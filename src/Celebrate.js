import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleImage, restartGame } from './actions';

import './App.css';

const mapStateToProps = function(state, ownProps) {
	// return {...state, ...ownProps}
	return {...state};
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		toggleImage: (flag) => dispatch(toggleImage(flag)),
		restartGame: () => dispatch(restartGame())
	}
}

class Celebrate extends Component {
	hanleClick = (e) => {
		this.props.toggleImage(false);
		this.props.restartGame();

		// let { dispatch } = this.props;
		// dispatch(toggleImage(false));
		// dispatch(restartGame());
	}

	render() {
		console.log(20, "Celebration rendering");

		let images = ["https://t3.ftcdn.net/jpg/02/13/13/70/500_F_213137035_psgI3vjEDlMD9NQuELFGOSdCjepK4dCj.jpg", "https://t4.ftcdn.net/jpg/01/00/48/91/500_F_100489124_qE3z0Wqq5fLYAd7CNjMTW6ZTfBGNHLSy.jpg", "https://t4.ftcdn.net/jpg/01/89/13/49/500_F_189134983_4t1exHfKmyxJjMIlXLozDW9GZIBCejeZ.jpg", "https://t3.ftcdn.net/jpg/01/89/00/52/500_F_189005268_DFOEZfXVekzAfHLSfVG78XQTjiYWs3Dw.jpg", "https://www.clipartmax.com/png/middle/68-684764_dragon-dance-lion-dance-chinese-new-year-cartoon-chinese-new-year-lion.png"];

		let luckyNumber = Math.floor(Math.random() * 4);
		let img_url = images[luckyNumber];

		if(!this.props.display){
			return null;
		}else{
			if(this.props.display){
				return (
					<Fragment>
						<div className="hover_bkgr_fricc">
							<span className="helper"></span>
							<div>
								<div className="popupCloseButton" onClick={this.hanleClick}>X</div>
								<div><img src={img_url} onClick={this.hanleClick} alt=""></img></div>
							</div>
						</div>
					</Fragment>
				);
			}else{
				return null;
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Celebrate);

