import IApiService from './IApiService';

class ApiService implements IApiService {
  private readonly baseUrl: string | undefined;

  constructor(baseUrl: string | undefined) {
    this.baseUrl = baseUrl;
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
    const options = JSON.parse(JSON.stringify(inputOptions));

    if ('body' in options && options.body instanceof Object) {
      options.body = JSON.stringify(options.body);
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
      };
    }

    const search = query ? `?${new URLSearchParams(query).toString()}` : '';

    const response = await window.fetch(`${this.baseUrl}${url}${search}`, {
      method,
      credentials: 'include',
      ...options,
    });

    if (response.ok) {
      const noContent = response.status === 201 || response.status === 204;
      return {
        headers: response.headers,
        body: noContent ? undefined : await response.json(),
      };
    }
    throw new Error(response.statusText);
  }
}

export default ApiService;
