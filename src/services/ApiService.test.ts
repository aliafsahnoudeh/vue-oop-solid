import ApiService from './ApiService';

describe('ApiService', () => {
  window.fetch = jest.fn((input: RequestInfo) => 
    Promise.resolve({ status: 201, ok: true, bodyUsed: true } as Response)
  );
  
  test('request 200', async () => {
    const apiService = new ApiService("");
    expect(await apiService.request<unknown, unknown>("GET", "/", "", {})).toEqual({"body": undefined, "headers": undefined})
  });
});
