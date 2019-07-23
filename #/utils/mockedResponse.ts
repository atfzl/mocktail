import { MockedNetworkResponse, NetworkRequest } from '#/interfaces';

export const createMockedResponse = (
  request: NetworkRequest,
  data: BodyInit,
  status: number = 200,
): MockedNetworkResponse => {
  if (request instanceof Request) {
    return new Response(data, { status });
  }

  return {
    data,
    status,
  };
};
