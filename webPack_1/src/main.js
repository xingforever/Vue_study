const {add,sub}=require('./js/math');
console.log(add(10,23));
console.log(sub(20,10));
import {name,age} from './js/info.js';
console.log(name)
console.log(age)

//依赖 css
require('./css/normal.css')

//依赖 les
require('./css/special.less')

import Vue from 'vue'
//import App from './vue/app.js'
import App from './vue/App.vue'


const app=new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})
