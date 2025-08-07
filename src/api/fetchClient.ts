import type { paths } from './../../test/fixtures/api.d';
import createFetchClient from 'openapi-fetch';
import createClient from './index';

const fetchClient = createFetchClient<paths>({
  baseUrl: 'https://api.example.com',
});

const $api = createClient(fetchClient);

export const infiniteOptions = $api.infiniteQueryOptions(
  'get',
  '/paginated-data',
  {
    params: {
      query: {
        limit: 3,
      },
    },
  },
  {
    getNextPageParam: () => {
      return '3';
    },
    initialPageParam: '2',
  }
);

export const useInfiniteQueryExample = () =>
  $api.useInfiniteQuery(
    'get',
    '/paginated-data',
    {
      params: {
        query: {
          limit: 3,
        },
      },
    },
    {
      getNextPageParam: () => {
        return 2;
      },
      getPreviousPageParam: () => {
        return 3;
      },
      initialPageParam: 3,
    }
  );

export const useSuspenseInfiniteQueryExample = () =>
  $api.useSuspenseInfiniteQuery(
    'get',
    '/paginated-data',
    {
      params: {
        query: {
          limit: 3,
        },
      },
    },
    { initialPageParam: 3, getNextPageParam: () => 3 }
  );
