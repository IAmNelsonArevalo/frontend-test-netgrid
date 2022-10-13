<template>
    <Header />
    <slot />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
/** Local Modules */
import useComponents from "@/views/components";

const { Header } = useComponents();

@Options({
    components: {
        Header
    }
})

export default class General extends Vue { }
</script>