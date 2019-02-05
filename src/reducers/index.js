import { AllActions } from '../actions';
import { combineReducers } from 'redux';

const numbers = (state = {numbers: [1], maxNumber: 1, luckyNumber: 1}, action) => {
	if(isNaN(action.number)){
		return state;
	}

	switch (action.type) {
		case AllActions.ADD_NUMBER:
			if(action.number){
				let maxNumber = +action.number;
				let luckyNumber = Math.floor(Math.random() * maxNumber);
                if(luckyNumber<maxNumber){
                        luckyNumber += 1;
                }
				let new_state_numbers = [...state.numbers, action.number];
				let new_state_numbers_unique = new_state_numbers.filter((value, index, self) => {return self.indexOf(value) === index});
				new_state_numbers_unique.sort(function(a, b){return a-b});

				return {numbers: new_state_numbers_unique, maxNumber: maxNumber, luckyNumber: luckyNumber};
			}else{
				return state;
			}
		case AllActions.REMOVE_NUMBER:
			if(action.number){
				let new_state_numbers = [...state.numbers];
				new_state_numbers.splice(new_state_numbers.indexOf(action.number), 1);

				let maxNumber = action.number--;
				let luckyNumber = Math.floor(Math.random() * maxNumber);
				if(luckyNumber<maxNumber){
					luckyNumber += 1;
				}
				return {numbers: new_state_numbers, maxNumber: maxNumber, luckyNumber: luckyNumber};
			}else{
				return state;
			}
		case AllActions.RESTART_GAME:
			let maxNumber = state.maxNumber;
			let new_state_numbers = [...state.numbers];
			let luckyNumber = Math.floor(Math.random() * maxNumber);
			if(luckyNumber<maxNumber){
				luckyNumber += 1;
			}
			return {numbers: new_state_numbers, maxNumber: maxNumber, luckyNumber: luckyNumber};
		default:
			return state
	}
}

const imageVisibility = (state = {todisplay: false}, action) => {
	switch (action.type) {
		case AllActions.TOGGLE_IMAGE:
			return {todisplay: action.todisplay};
		default:
			return state
	}
}

const reducers = combineReducers({numbers, imageVisibility});

export default reducers;
