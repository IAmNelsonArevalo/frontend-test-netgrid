<template>
    <v-app-bar color="teal-darken-4" image="https://wallpaperaccess.com/full/20996.jpg">
        <template v-slot:image>
            <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template>
        <!-- Title -->
        <router-link to="/login" class="ml-6">
            <v-app-bar-title>NetGrid Test</v-app-bar-title>
        </router-link>

        <!-- Spacer -->
        <v-spacer></v-spacer>

        <!-- Avatar Menu -->
        <div class="mr-6">
            <v-menu location="bottom">
                <template v-slot:activator="{props}">
                    <div v-bind="props" class="flex gap-3 items-center cursor-pointer">
                        <v-avatar>
                            <v-img
                                :src="userComputed.avatar ? userComputed.avatar : 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-1.aac046b6.png'"
                                alt="Avatar"></v-img>
                        </v-avatar>
                        <div class="flex justify-center text-center">
                            <span class="md:block hidden">{{userComputed.name}} <br /> <small>{{userComputed.email}}</small></span>
                        </div>
                    </div>
                </template>
                <v-list>
                    <v-list-item>
                        <div class="flex gap-3 items-center cursor-pointer">
                            <v-avatar>
                                <v-img
                                    :src="userComputed.avatar ? userComputed.avatar : 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-1.aac046b6.png'"
                                    alt="Avatar"></v-img>
                            </v-avatar>
                            <div class="flex justify-center text-center">
                                <span>{{userComputed.name}} <br /> <small>{{userComputed.email}}</small></span>
                            </div>
                        </div>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item class="cursor-pointer" @click="$router.push('/favorites')">Mis favoritos</v-list-item>
                    <v-divider></v-divider>
                    <v-list-item class="cursor-pointer" @click="closeSession">Cerrar Sesion</v-list-item>
                </v-list>
            </v-menu>
        </div>

    </v-app-bar>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {
    /**
     * This function close the user's session.
     * @return {void}
     */
    closeSession(): void {
        this.$store.dispatch("logout");
        setTimeout(() => {
            this.$router.push("/login")
        }, 2000)
    }

    get userComputed (): any {
        return this.$store.state.auth.session.user;
    }
}
</script>