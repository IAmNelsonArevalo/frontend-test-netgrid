<template>
    <div class="login-container">
        <v-card>
            <v-row>
                <v-col cols="12" md="12" lg="12">
                    <h1 class="card-title">Vamos a iniciar...!</h1>
                </v-col>
                <v-col cols="12" md="12" lg="12" class="flex justify-center">
                    <span class="card-description">
                        Registra tus credenciales para que seas un nuevo poke-fanatic@...!</span>
                </v-col>

                <v-col cols="12" md="12" lg="12">
                    <v-text-field v-model="user.name" color="primary" label="Nombre completo" variant="underlined"
                        placeholder="John Doe"></v-text-field>
                    <v-text-field v-model="user.email" color="primary" label="Correo Electronico" variant="underlined"
                        placeholder="joe@example.com"></v-text-field>
                    <v-text-field v-model="user.address" color="primary" label="Direccion" variant="underlined"
                        placeholder="Carrera 900 # 500 - 07"></v-text-field>
                    <v-text-field v-model="user.complement" color="primary" label="Complemmento de la direccion"
                        variant="underlined" placeholder="Torre - Apto - Casa"></v-text-field>
                    <v-text-field v-model="user.city" color="primary" label="Ciudad" variant="underlined"
                        placeholder="Bogota"></v-text-field>
                    <v-text-field v-model="user.birthday" color="primary" label="Fecha de nacimiento"
                        variant="underlined" placeholder="joe@example.com" type="date"></v-text-field>
                    <v-text-field v-model="user.password" color="primary" label="Contraseña" variant="underlined"
                        type="password"></v-text-field>
                    <small>{{user.password}}</small>
                </v-col>
                <v-col cols="12" md="12" lg="12" class="flex justify-center">
                    <v-btn color="primary" class="button-login" @click="createUser">Registrarse</v-btn>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script lang="ts">
import { RegisterForm } from "@/models/interfaces/auth.interfaces";
import { Vue } from "vue-class-component";
import "../Login/Login.scss"

export default class Register extends Vue {
    user: RegisterForm = { name: "", email: "", password: "", address: "", complement: "", city: "", birthday: "" }

    createUser(): void {
        
        this.$store.dispatch("auth/register", {
            onSuccess: () => {
                this.$swal({
                    icon: "success",
                    text: "En este momento acabamos de enviarte un correo electronico para que puedas activar tu cuenta y posteriormente ingreses al sistema."
                })

                this.$router.push("/login");
            },
            onError: () => {
                this.$swal({
                    icon: "error",
                    text: "Ocurrio un problema al momento de crear tu cuenta."
                })
            },
            user: this.user
        });
    }
}
</script>