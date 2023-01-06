import { filterReducer } from 'features/filter/filter-slice';
import { positionReducer } from 'features/positions/position-slice';
import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';


const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
	filters: filterReducer,
	positions: positionReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: _persistedReducer,
	devTools: true,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export const persistor = persistStore(store);
