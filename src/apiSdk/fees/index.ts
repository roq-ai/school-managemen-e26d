import axios from 'axios';
import queryString from 'query-string';
import { FeeInterface, FeeGetQueryInterface } from 'interfaces/fee';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFees = async (query?: FeeGetQueryInterface): Promise<PaginatedInterface<FeeInterface>> => {
  const response = await axios.get('/api/fees', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFee = async (fee: FeeInterface) => {
  const response = await axios.post('/api/fees', fee);
  return response.data;
};

export const updateFeeById = async (id: string, fee: FeeInterface) => {
  const response = await axios.put(`/api/fees/${id}`, fee);
  return response.data;
};

export const getFeeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/fees/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFeeById = async (id: string) => {
  const response = await axios.delete(`/api/fees/${id}`);
  return response.data;
};
