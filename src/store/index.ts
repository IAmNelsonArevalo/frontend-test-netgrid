import { createStore } from 'vuex'
import useStoreModules from './modules';

/** Modules */
const {modules} = useStoreModules();

export default createStore({
  modules: modules
})
