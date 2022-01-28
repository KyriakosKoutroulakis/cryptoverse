import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.coinranking.com/v2';
// const baseUrl = 'https://coinranking1.p.rapidapi.com';

const cryptoApiHeaders = {
  // 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  // 'x-rapidapi-key': 'bfd8c72782msh654f5afecc11300p1865c7jsn3741619f28d5',
  'x-access-token': 'coinranking4d9f715098ee9afed970f743bc254c0632036a88bd13a315'
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    })
  })
});

export const {
  useGetCryptosQuery,
} = cryptoApi;
