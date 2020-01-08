import { RESULTS as NAME } from '../../reducerRegistery';
import { createSelectors } from '../../index';

export const [getResults] = createSelectors(NAME,['results'])