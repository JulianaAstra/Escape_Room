import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appProcess } from './app-process/app-process';
import { appData } from './app-data/app-data';
import { userData } from './user-data/user-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.AppData]: appData.reducer,
  [NameSpace.AppProcess]: appProcess.reducer,
  [NameSpace.UserData]: userData.reducer,

  [NameSpace.UserProcess]: userProcess.reducer,
});
