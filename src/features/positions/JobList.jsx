import { JobPosition } from './JobPosition';
import { useDispatch } from 'react-redux';
import { addFilter } from '../filter/filter-slice';
import { usePositions } from './usePositions';
import { useFetchPositions } from './useFetchPosition';

const JobList = () => {
	const positions = usePositions();
	useFetchPositions();

	const dispatch = useDispatch();
	const handleAddFilter = filter => {
		dispatch(addFilter(filter));
	};

	return (
		<div className="job-list">
			{positions.map(item => (
				<JobPosition
					key={item.id}
					{...item}
					handleAddFilter={handleAddFilter}
				/>
			))}
		</div>
	);
};

export { JobList };
