import { Plugin } from 'vuex';
import { RootState } from '@/app/app.store';

export const logger: Plugin<RootState> = store => {
  store.subscribe((mutaition, state) => {
    console.log('logger', mutaition, state);
  });
};
