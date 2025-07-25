import type { paths } from './../../test/fixtures/api.d';
import createFetchClient from 'openapi-fetch';
import createClient from './index';

const fetchClient = createFetchClient<paths>({
  baseUrl: 'https://api.example.com',
});

const $api = createClient(fetchClient);

const infiniteOptions = $api.infiniteQueryOptions(
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

const test2 = $api.useInfiniteQuery(
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


