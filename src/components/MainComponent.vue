<template>
    <div class="container-fluid bg_box">
        <div class="container py-5">         
            <div class="row">
                <div class="col-10 mx-auto">
                    <div class="row gap-4 justify-content-center">
                        <div class="col_1 my-3 rounded bg_card py-3 text-center" v-for="(disco, index) in filterGender" :key="index">
                            <img :src="disco.poster" alt="">
                            <h5 class="t_title">{{disco.title}}</h5>
                            <span class="t_basic">{{disco.author}}<br>{{disco.year}}</span>
                        </div>   
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
import axios from "axios";
import state from '@/state.js'

export default{
    name: "SiteMain",
    data(){
        return{
            link:'https://flynn.boolean.careers/exercises/api/array/music',
            spot: null,
        }
    },

    methods:{
    },

    computed:{
        filterGender(){
            if(state.genreDisco == ''){
                return this.spot
            }else{
                return this.spot.filter(disco =>{
                    return disco.genre.toLowerCase().includes(state.genreDisco.toLowerCase())
                })
            }
        }
    },

    mounted(){
        axios
        .get(this.link)
        .then(response =>{
            console.log(response);
            this.spot = response.data.response
        })
        .catch(error =>{
            console.log(error);
        })
    }
}
</script>


<style lang="scss" scoped>

.col_1{
    width: calc((100% / 6) * 1);
}

img{
    width: 100%;
}
</style>