import { COUNTER as NAME } from '../../reducerRegistery';
import { createSelectors } from '../../index';

export const [getCounterValue] = createSelectors(NAME, ['counter']);
