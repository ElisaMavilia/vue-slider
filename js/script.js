import {slides} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return {
            slides: slides,
            activeIndexSlide: 0, // l'indice della slide attiva va inserito dentro una variabile in modo da poter scorrere il resto delle immagini */
        }
    },
    methods: {
        nextSlide(){
            if(this.activeIndexSlide < this.slides.length -1){
                this.activeIndexSlide++; // incremento di uno la slide attiva
        }else {
            this.activeIndexSlide = 0;
        }
    },
        prevSlide(){
            if(this.activeIndexSlide > 0){
            this.activeIndexSlide--; //decremento di uno la slide attiva
        } else {
            this.activeIndexSlide = this.slides.length - 1;
        }
    },
        goToSlide(index){ // al click della thumbnail l'immagine centrale cambia
            this.activeIndexSlide = index;
        },
    },

    mounted(){
        setInterval(this.nextSlide, 3000);
        
    }, 
   
}).mount("#app");