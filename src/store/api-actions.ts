import { createAsyncThunk } from '@reduxjs/toolkit';
import { Quest, DetailedQuest, Point, BookedQuest, reservationId } from '../types/types';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { ThunkObjType } from '../types/thunk-object';
import { BookedQuestData } from '../types/booked-quest-data';
import { ReservedQuestData } from '../types/booked-quest-data';

export const fetchQuestAction = createAsyncThunk<Quest[], undefined, ThunkObjType>(
  'data/fetchQuests', async (_arg, {extra: api}) => {
    const {data} = await
    api.get<Quest[]>(APIRoute.Quests);
    return data;
  },
);

export const fetchBookingInformationAction = createAsyncThunk<Point[], {id: string}, ThunkObjType>(
  'data/fetchBookingInformation', async ({id}, {extra: api}) => {
    const url = id !== undefined ? `${APIRoute.Quests}/${id}/booking` : '';
    const {data} = await
    api.get<Point[]>(url);
    return data;
  },
);

export const fetchDetailedQuestAction = createAsyncThunk<DetailedQuest, {id: string}, ThunkObjType>(
  'data/fetchDetailedQuest', async ({id}, {dispatch, extra: api}) => {
    const url = id !== undefined ? `${APIRoute.Quests}/${id}` : '';
    const {data} = await
    api.get<DetailedQuest>(url);
    dispatch(fetchBookingInformationAction({id}));
    return data;
  },
);

export const fetchBookedQuestsAction = createAsyncThunk<BookedQuest[], undefined, ThunkObjType>(
  'data/fetchBookedQuests', async (_arg, { extra: api}) => {
    const {data} = await
    api.get<BookedQuest[]>(APIRoute.Reservation);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkObjType>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkObjType>('user/login', async ({email, password}, {dispatch, extra: api}) => {
  const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
  saveToken(token);
  dispatch(redirectToRoute(AppRoute.Root));
},);

export const logoutAction = createAsyncThunk<void, undefined, ThunkObjType>('user/logout', async (_arg, {dispatch, extra: api}) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(redirectToRoute(AppRoute.Root));
},);

export const fetchBookQuestAction = createAsyncThunk<void, BookedQuestData, ThunkObjType>('data/bookQuest', async ({id, date, time, contactPerson, phone, withChildren, peopleCount, placeId}, {dispatch, extra: api}) => {
  const url = id !== undefined ? `${APIRoute.Quests}/${id}/booking` : '';
  await api.post<ReservedQuestData>(url, {date, time, contactPerson, phone, withChildren, peopleCount, placeId});
  dispatch(redirectToRoute(AppRoute.MyQuests));
},);

export const deleteQuestAction = createAsyncThunk<void, reservationId, ThunkObjType>(
  'data/deleteQuest', async ({reservId}, {dispatch, extra: api}) => {
    const url = reservId !== undefined ? `${APIRoute.Reservation}/${reservId}` : '';
    await api.delete(url);
    dispatch(fetchBookedQuestsAction());
  },);
