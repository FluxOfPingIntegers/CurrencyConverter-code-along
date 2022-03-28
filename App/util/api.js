import { format } from 'date-fns';

import SampleRates from '../data/SampleRates';

export const api = (fullPath = '') => {
  const [path] = fullPath.split('?');

  if (path.length === 0) {
    return Promise.reject(new Error('Path is required.'));
  }

  if (path !== '/latest') {
    return Promise.reject(new Error('Invalid path.'));
  }

  const baseCurrency = fullPath.split('base=')[1] || 'EUR';

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        base: baseCurrency,
        date: format(new Date(), 'yyyy-MM-dd'),
        rates: {
          ...SampleRates,
          [baseCurrency]: 1,
        },
      });
    }, 500);
  });
};