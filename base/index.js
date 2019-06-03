/*
 * @Author: DevZhang 
 * @Date: 2019-05-31 22:30:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-03 22:39:22
 */



let app = new Vue({
    el: '#app',
    data: {
        message: 'text'
    },

    computed: {
        reverseMsg() {
            return this.message.split('').reverse().join('');
        }
    },

    methods: {
        reMessage() {
            return this.message.split('').reverse().join('');
        }
    },
})

app.message = 'you'











