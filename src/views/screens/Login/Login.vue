<template>
    <div class="login-container">
        <v-card>
            <v-row>
                <v-col cols="12" md="12" lg="12">
                    <h1 class="card-title">Bienvenido...!</h1>
                </v-col>
                <v-col cols="12" md="12" lg="12" class="flex justify-center">
                    <span class="card-description">Ingresa tus credenciales para que puedas ingresar a este gran mundo
                        de los pokemons!</span>
                </v-col>
                <v-col cols="12" md="12" lg="12">
                    <v-text-field
                        v-model="user.email"
                        color="primary"
                        label="Correo Electronico"
                        variant="underlined"
                        placeholder="joe@example.com"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" lg="12">
                    <v-text-field
                        v-model="user.password"
                        color="primary"
                        label="Contraseña"
                        variant="underlined"
                        type="password"
                    ></v-text-field>
                    <small>{{user.password}}</small>
                </v-col>
                <v-col cols="12" md="12" lg="12" class="flex justify-center">
                    <v-btn color="#9155fd" class="button-login" @click="login">Ingresar</v-btn>
                </v-col>
                <v-col cols="12" md="12" lg="12" class="flex justify-center">
                    <router-link to="/register">
                        <v-btn color="primary" class="button-login">Registrarse</v-btn>
                    </router-link>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
/** Interfaces */
import { LoginForm } from "@/models/interfaces/auth.interfaces";
/** Styles */
import "./Login.scss";

export default class Login extends Vue {
    user: LoginForm = {email: "", password: ""};

    // mounted(): void {
    //     if(this.$store.state.auth.session.user.token !== '') {
    //         this.$router.push("/")
    //     }
    // }

    /** Methods */
    login(): void {
        this.$store.dispatch('auth/login', this.user).then(() => {
            this.$swal({
                icon: "success",
                text: "Bienvenido...!"
            })
            this.$router.push("/")
        }).catch((err: any) => {
            this.$swal({
                icon: "error",
                text: "Las credenciales ingresadas son erroneas."
            })
        })
    }
}
</script>