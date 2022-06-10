interface IApiService {
  request<O, B>(
    method: string,
    url: string,
    query: any | null,
    options: O
  ): Promise<{
    headers: Headers,
    body: B
  }>;
}

export default IApiService;
