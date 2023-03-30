import { configureStore, combineReducers } from '@reduxjs/toolkit';

import homePageSliceReducer from '../slices/homePageSlice';
import detailsPageSliceReducer from '../slices/detailsPageSlice';
import actorPageSliceReducer from '../slices/actorPageSlice';
import seasonSliceReducer from '../slices/seasonSlice';
import pagitaneSliceReducer from '../slices/pagitaneSlice';
import searchSliceReducer from '../slices/searchSlice';

const stringMiddleWare = () => (next: any) => (actions: any) => {
  if (typeof actions === 'string') {
    return next({
      type: actions
    })
  }
  return next(actions);
};

const rootReducer = combineReducers({
  homePageReducer: homePageSliceReducer,
  detailPageReducer: detailsPageSliceReducer,
  actorPageReducer: actorPageSliceReducer,
  seasonReducer: seasonSliceReducer,
  paginateReducer: pagitaneSliceReducer,
  searchReducer: searchSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
