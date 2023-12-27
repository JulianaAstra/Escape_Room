import { createAsyncThunk } from '@reduxjs/toolkit';
import { Quest, DetailedQuest, Point, BookedQuest } from '../types/types';
import { getQuests, getDetailedQuest, setAuthorization, setError, setQuestDataLoadingStatus, setDetailedQuestDataLoadingStatus, setBookingInformationDataLoadingStatus, getBookingInformation, redirectToRoute, setBookedQuestsDataLoadingStatus, getBookedQuests} from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from '.';
import { ThunkObjType } from '../types/thunk-object';
import { BookedQuestData } from '../types/booked-quest-data';
import { ReservedQuestData } from '../types/booked-quest-data';
import { reservationId } from '../types/types';

export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR,);
},);

export const fetchQuestAction = createAsyncThunk<void, undefined, ThunkObjType>(
  'data/fetchQuests', async (_arg, {dispatch, extra: api}) => {
    dispatch(setQuestDataLoadingStatus(true));
    const {data} = await
    api.get<Quest[]>(APIRoute.Quests);
    dispatch(getQuests(data));
    dispatch(setQuestDataLoadingStatus(false));
  },
);

export const fetchDetailedQuestAction = createAsyncThunk<void, {id: string}, ThunkObjType>(
  'data/fetchDetailedQuest', async ({id}, {dispatch, extra: api}) => {
    dispatch(setDetailedQuestDataLoadingStatus(true));
    const url = id !== undefined ? `${APIRoute.Quests}/${id}` : '';
    const {data} = await
    api.get<DetailedQuest>(url);
    dispatch(getDetailedQuest(data));
    dispatch(setDetailedQuestDataLoadingStatus(false));
  },
);

export const fetchBookingInformationAction = createAsyncThunk<void, {id: string}, ThunkObjType>(
  'data/fetchBookingInformation', async ({id}, {dispatch, extra: api}) => {
    dispatch(setBookingInformationDataLoadingStatus(true));
    const url = id !== undefined ? `${APIRoute.Quests}/${id}/booking` : '';
    const {data} = await
    api.get<Point[]>(url);
    dispatch(getBookingInformation(data));
    dispatch(setBookingInformationDataLoadingStatus(false));
  },
);

export const fetchBookedQuestsAction = createAsyncThunk<void, undefined, ThunkObjType>(
  'data/fetchBookedQuests', async (_arg, {dispatch, extra: api}) => {
    dispatch(setBookedQuestsDataLoadingStatus(true));
    const {data} = await
    api.get<BookedQuest[]>(APIRoute.Reservation);
    dispatch(getBookedQuests(data));
    dispatch(setBookedQuestsDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkObjType>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkObjType>('user/login', async ({email, password}, {dispatch, extra: api}) => {
  const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
  saveToken(token);

  dispatch(setAuthorization(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Root));
},);

export const logoutAction = createAsyncThunk<void, undefined, ThunkObjType>('user/logout', async (_arg, {dispatch, extra: api}) => {
  await api.delete(APIRoute.Logout);
  dropToken();

  dispatch(setAuthorization(AuthorizationStatus.NoAuth));
  dispatch(redirectToRoute(AppRoute.Root));
},);

export const fetchBookQuestAction = createAsyncThunk<void, BookedQuestData, ThunkObjType>('user/bookQuest', async ({id, date, time, contactPerson, phone, withChildren, peopleCount, placeId}, {dispatch, extra: api}) => {
  const url = id !== undefined ? `${APIRoute.Quests}/${id}/booking` : '';
  await api.post<ReservedQuestData>(url, {date, time, contactPerson, phone, withChildren, peopleCount, placeId});

  dispatch(redirectToRoute(AppRoute.MyQuests));
},);

export const deleteQuestAction = createAsyncThunk<void, reservationId, ThunkObjType>(
  'user/deleteQuest', async ({reservId}, {dispatch, extra: api}) => {
    const url = reservId !== undefined ? `${APIRoute.Reservation}/${reservId}` : '';
    await api.delete(url);
    dispatch(fetchBookedQuestsAction());
  },);
