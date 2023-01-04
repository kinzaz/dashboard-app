import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllFilter } from 'store/filters/filter-selector';
import { clearFilter, removeFilter } from 'store/filters/filter-actions';

const FilterPanel = () => {
	const currentFilters = useSelector(selectAllFilter);

	const dispatch = useDispatch();
	if (currentFilters.length === 0) {
		return null;
	}

	return (
		<Card className="filter-panel">
			<div className="filter-panel-wrapper">
				<Stack>
					{currentFilters.map(filter => (
						<Badge
							onClear={() => dispatch(removeFilter(filter))}
							variant="clearable"
							key={filter}
						>
							{filter}
						</Badge>
					))}
				</Stack>

				<button onClick={() => dispatch(clearFilter)} className="link">
					Clear
				</button>
			</div>
		</Card>
	);
};

export { FilterPanel };
