import { useSelector } from 'react-redux';
import { selectVisiblePositions } from './position-slice';
import { selectAllFilter } from 'features/filter/filter-slice';

export const usePositions = () => {
	const currentFilters = useSelector(selectAllFilter);
	const positions = useSelector(state =>
		selectVisiblePositions(state, currentFilters)
	);

	return positions;
};
