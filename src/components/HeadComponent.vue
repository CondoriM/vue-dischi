<template>
<nav class="navbar navbar-expand-lg bg_card">
    <div class="col-4">
        <div class="col-2">
            <img src="@/assets/img/spot.png" alt="">
        </div>
        <div class="col">

        </div>
    </div>
    <div class="col-10">
        <div class="row">
            <GenreBox v-model="genreDisco" @formSubmit="search"></GenreBox>
        </div>
    </div>
</nav>
</template>

<script>
import GenreBox from "@/components/GenreBox.vue"
import state from "@/state.js"

export default{ 
    name: 'SiteHead',
    components:{
        GenreBox
    },

    data(){
        return{
            genreDisco:''
        }
    },

    methods:{
        search(){
            console.log('ricerca');
            console.log(this.genreDisco);
            state.genreDisco = this.genreDisco
            console.log(state);            
        }
    }
}
</script>

<style lang="scss" scoped>

img{
    width: 100%;
}

</style>