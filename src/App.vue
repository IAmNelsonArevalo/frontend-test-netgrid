<template>
  <v-app>
    <v-main>
      <suspense>
        <General v-if="!isAuthRoute">
          <router-view />
        </General>
        <router-view v-else/>
      </suspense>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import useViews from "@/views";

const { useLayouts } = useViews();
const { General } = useLayouts();

@Options({
  components: {
    General
  }
})

export default class App extends Vue {
  mounted(): void {
    console.log(this.isAuthRoute);
  }

  get isAuthRoute(): boolean {
    return this.$route.name === "Login" || this.$route.name === "Register";
  }
}
</script>
