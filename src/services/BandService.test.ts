import bandsMock from '../mockedData/bandsMock';

import MockedApiService from './MockedApiService';
import BandService from './BandService';
import BandServicePathsInterface from './BandServicePaths.interface';

describe('BandService', () => {
  test('fetch work correctly', async () => {
    const bandService = new BandService(new MockedApiService(bandsMock[0]), {
        fetch: {
          Method: 'GET',
          Path: "/bands"
        } 
    }as BandServicePathsInterface);
    expect(await bandService.fetch()).toEqual(bandsMock[0])
  });
});
