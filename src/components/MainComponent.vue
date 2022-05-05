<template>
    <div class="container-fluid">
        <div class="container py-5">         
            <div class="row">
                <div class="col-10 mx-auto">
                    <div class="row">
                        <div class="col_1 my-3 rounded" v-for="(disco, index) in spot" :key="index">
                            <img :src="disco.poster" alt="">
                            <h5>{{disco.author}}</h5>
                        </div>   
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default{
    name: "SiteMain",
    data(){
        return{
            link:'https://flynn.boolean.careers/exercises/api/array/music',
            spot: null,
        }
    },

    methods:{
        callApi(){

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
    width: calc((100% / 5) * 1);
}

img{
    width: 100%;
}
</style>