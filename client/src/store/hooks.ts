import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { AppDispatch, RootState, store } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export { store };