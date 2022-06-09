import ProcessRawDataService from './ProcessRawDataService';
import bandsMock from '../mockedData/bandsMock';
import apiMock from '../mockedData/apiMock';

const processRawDataService = new ProcessRawDataService();

describe('ProcessRawDataService', () => {
  test('proccessing raw data should work correctly', () => {
    const bands = processRawDataService.process(apiMock);
    expect(bands).toStrictEqual(bandsMock);
  });
});
