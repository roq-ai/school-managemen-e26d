import axios from 'axios';
import queryString from 'query-string';
import { TimetableInterface, TimetableGetQueryInterface } from 'interfaces/timetable';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTimetables = async (
  query?: TimetableGetQueryInterface,
): Promise<PaginatedInterface<TimetableInterface>> => {
  const response = await axios.get('/api/timetables', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTimetable = async (timetable: TimetableInterface) => {
  const response = await axios.post('/api/timetables', timetable);
  return response.data;
};

export const updateTimetableById = async (id: string, timetable: TimetableInterface) => {
  const response = await axios.put(`/api/timetables/${id}`, timetable);
  return response.data;
};

export const getTimetableById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/timetables/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTimetableById = async (id: string) => {
  const response = await axios.delete(`/api/timetables/${id}`);
  return response.data;
};
