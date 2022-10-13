<template>
    <v-container>
        <v-table fixed-header>
            <thead>
                <tr>
                    <th class="text-center">ID</th>
                    <th class="text-center">Foto</th>
                    <th class="text-center">Pokemon</th>
                    <th class="text-center">Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableItems" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>
                        <v-img :src="urlPokemon(item.id)" alt="Pokemon"></v-img>
                    </td>
                    <td class="text-center">{{item.name.charAt(0).toUpperCase() + item.name.slice(1)}}</td>
                    <td>
                        <div class="flex justify-center">
                            <v-btn color="#9155fd" @click="openModal(item.id)">
                                <span class="capitalize text-white">More details</span>
                            </v-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <div class="flex justify-center w-full">
            <v-pagination v-model="page" class="w-[50%]" :length="totalPage"
                @update:modelValue="changePage($event, pageSizeNum)"></v-pagination>
        </div>
        <v-dialog v-model="open" class="flex justify-center items-center">
            <v-card class="modal-pokemon">
                <v-row>
                    <v-col cols="12" sm="6" class="flex justify-center image">
                        <v-img class="m-w-[200px]" :src="urlPokemon(pokemon.id)"></v-img>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-col md="12" cols="12" class="flex justify-center">
                            <v-cart-title class="font-bold text-center uppercase">{{pokemon.name}}</v-cart-title>
                        </v-col>
                        <v-col md="12" cols="12">
                            <v-card-text><b>TYPE:</b> {{getTypes(pokemon.types)}}</v-card-text>
                            <v-card-text><b>BASE EXPERIENCE:</b> {{pokemon.base_experience}}</v-card-text>
                            <v-card-text><b>ABILITIES:</b> </v-card-text>
                            <ul>
                                <li v-for="hability in pokemon?.abilities" :key="index">{{hability?.ability.name}}</li>
                            </ul>
                        </v-col>
                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-btn color="#e1e1e1" @click="open = false">Cerrar</v-btn>
                    <v-btn color="#9155fd">Agregar a favoritos</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
/** Interfaces */
import { PokemonsData } from "@/models/interfaces/home.interfaces";
/** Styles */
import "./Home.scss";

export default class Home extends Vue {
    /** Data */
    page: number = 1;
    dialog: { id: number, open: boolean } = { id: 0, open: false }
    open: boolean = false;

    /** Mounted */
    mounted(): void {
        this.$store.dispatch("home/getAllPokemons");
        setTimeout(() => {
            this.$store.dispatch("home/formatTable", { page: this.page, pokemons: this.$store.state.home.pokemons });
        }, 3000)
        console.log(this.pokemon.types)
    }

    /** Methods */
    changePage(value?: any, su?: string): void {
        console.log(value)
        this.$store.dispatch("home/formatTable", {
            page: this.page,
            pokemons: this.$store.state.home.pokemons
        })
    }

    urlPokemon(id: number): string {
        return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
    }

    changeValue(event: any, newValue: any): void {
        console.log(event)
        console.log("id", newValue);
        this.dialog = {open: event, id: newValue}
    }

    openModal(id: number): void {
        this.$store.dispatch("home/getPokemon", id)
        this.open = true;
        console.log(this.pokemon)
    }

    getTypes(types: any): string {
        if(types && types.length > 1) {
            return `${types[0].type.name} / ${types[1].type.name}`
        } else {
            return `${types[0].type.name}`
        }
    }

    /** Computed */
    get totalPage(): number {
        return this.$store.state.home.totalPages;
    }

    get tableItems(): Array<PokemonsData> {
        return this.$store.state.home.tableItems;
    }

    get pokemon(): any {
        return this.$store.state.home.pokemon;
    }
}
</script>