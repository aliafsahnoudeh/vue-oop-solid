import React from 'react';
import {
  render, waitFor,
} from '@testing-library/react';
import bandsMock from '../mockedData/bandsMock';

import Band from './Band';

describe('Band', () => {
  test('rendering a band should work correctly', async () => {
    const { container } = render(<Band band={bandsMock[0]} index={0} />);
    await waitFor(async () => {
      expect(container.getElementsByClassName('band').length).toBe(1);
    });
  });

  test('rendering time slots should work correctly', async () => {
    const { container } = render(<Band band={bandsMock[0]} index={0} />);
    await waitFor(async () => {
      let totalTimeSlots = 1; // selected slot on the top of band component!
      bandsMock[0].groups.forEach((group) => {
        totalTimeSlots += group.timeSlots.length;
      });
      expect(container.getElementsByClassName('time-slot').length).toBe(totalTimeSlots);
    });
  });
});
