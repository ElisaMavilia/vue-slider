import {slides} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return {
            slides: slides,
        }
    },
    methods: {

    },
    mounted(){

    }
}).mount("#app");