import React, { Component, Fragment } from 'react';
import './App.css';

class Celebrate extends Component {
	constructor(props){
		super(props);
		this.state={display: true};
	}

	render() {
		let images = ["https://t3.ftcdn.net/jpg/02/13/13/70/500_F_213137035_psgI3vjEDlMD9NQuELFGOSdCjepK4dCj.jpg", "https://t4.ftcdn.net/jpg/01/00/48/91/500_F_100489124_qE3z0Wqq5fLYAd7CNjMTW6ZTfBGNHLSy.jpg", "https://t4.ftcdn.net/jpg/01/89/13/49/500_F_189134983_4t1exHfKmyxJjMIlXLozDW9GZIBCejeZ.jpg", "https://t3.ftcdn.net/jpg/01/89/00/52/500_F_189005268_DFOEZfXVekzAfHLSfVG78XQTjiYWs3Dw.jpg", "https://www.clipartmax.com/png/middle/68-684764_dragon-dance-lion-dance-chinese-new-year-cartoon-chinese-new-year-lion.png"];

		let luckyNumber = Math.floor(Math.random() * 4);
		let img_url = images[luckyNumber];

		if(!this.props.display){
			return null;
		}else{
			if(this.state.display){
				return (
					<Fragment>
						<div className="hover_bkgr_fricc">
							<span className="helper"></span>
							<div>
								<div className="popupCloseButton" onClick={this.props.hanleClick}>X</div>
								<div><img src={img_url} onClick={this.props.hanleClick} alt=""></img></div>
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

export default Celebrate;
