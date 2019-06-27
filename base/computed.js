/*
 * @Author: DevZhang 
 * @Date: 2019-06-25 21:43:03 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-25 22:05:01
 */


let app = new Vue({
    el: '#app',
    data: {
        firstName: 'dev',
        lastName: 'zhang',
        age: 29
    },
    methods: {
        fullName() {
            console.log('执行一次方法');
            return this.firstName + ' ' + this.lastName
        }
    },
})