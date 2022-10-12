import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';
import useStoreModules from './modules';

/** Modules */
const {modules} = useStoreModules();

export default createStore({
  modules: modules,
  plugins: [new VuexPersistence({
    storage: window.localStorage
  }).plugin]
})
