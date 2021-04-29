const {add, mul} = require('./js/mathUtils')

console.log(add(10, 20))
console.log(mul(10, 20))

import {name, age, height} from "./js/info.js";

console.log(name);
console.log(age);
console.log(height);

// 依赖 css 文件
require("./css/normal.css")

// 使用 Vue
import Vue from "vue"

const app = new Vue({
    el: "#app",
    data: {
        message: "你好呀"
    }
})