import IApiService from './IApiService';

class MockedApiService implements IApiService {
  private readonly mockedData: unknown;

  constructor(mockedData: unknown) {
    this.mockedData = mockedData;
  }

  public async request<O, B>(
    method: string,
    url: string,
    query: any = null,
    inputOptions: O,
  ): Promise<{
    headers: Headers,
    body: B
  }> {
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve({
          headers: {} as Headers,
          body: this.mockedData as B
        })
      }, 100)
    })
  }
}

export default MockedApiService;
