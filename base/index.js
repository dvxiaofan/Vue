/*
 * @Author: DevZhang 
 * @Date: 2019-05-31 22:30:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-04 17:10:42
 */



let app = new Vue({
    el: '#app',
    data: {
        message: 'text',
        firstName: 'xiao',
        lastName: 'fan'
    },

    computed: {
        reverseMsg() {
            return this.message.split('').reverse().join('');
        },
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        }
    },

    methods: {
        reMessage() {
            return this.message.split('').reverse().join('');
        }
    },
})

app.message = 'you'











