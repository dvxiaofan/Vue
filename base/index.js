/*
 * @Author: DevZhang 
 * @Date: 2019-05-31 22:30:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-01 23:46:08
 */





Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>this is {{todo.text}}</li>'
})


let app = new Vue({
    el: '#app',
    data: {
        items: [
            {id: 001, text: '001'},
            {id: 002, text: '002'},
            {id: 003, text: '003'},
            {id: 004, text: '004'},
        ]
    }
})










