export const addNumber = number => ({
	type: AllActions.ADD_NUMBER,
	number
})

export const removeNumber = number => ({
	type: AllActions.REMOVE_NUMBER,
	number
})

export const restartGame = () => ({
	type: AllActions.RESTART_GAME,
	number: -1
})

export const toggleImage = todisplay => ({
	type: AllActions.TOGGLE_IMAGE,
	todisplay
})

export const AllActions = {
	ADD_NUMBER: 'ADD_NUMBER',
	REMOVE_NUMBER: 'REMOVE_NUMBER',
	RESTART_GAME: 'RESTART_GAME',
	TOGGLE_IMAGE: 'TOGGLE_IMAGE'
}
