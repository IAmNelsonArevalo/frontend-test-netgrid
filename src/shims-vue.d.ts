import { AuthState } from "./models/interfaces/auth.interfaces";
import { HomeStates } from "./models/interfaces/home.interfaces";

/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
    $swal: Sweet;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $swal: TVueSwalInstance;
  }
  interface VueConstructor {
    swal: TVueSwalInstance;
  }
}
