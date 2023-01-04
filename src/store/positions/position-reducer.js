import { ADD_POSITION } from './position-action';

export const positionReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_POSITION: {
			return action.positions;
		}
		default: {
			return state;
		}
	}
};
