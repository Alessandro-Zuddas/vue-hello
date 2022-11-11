"use strict";

const { createApp } = Vue

createApp({
    data() {
        return{
            message: "Hello World! I'm Vue.js!",
            image: "vueImg.png",
            classList: "pb-20"
        }
    }
}).mount("#app");