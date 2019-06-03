/*
 * @Author: DevZhang 
 * @Date: 2019-05-31 22:30:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-03 13:03:47
 */



let app = new Vue({
    el: '#app',
    data: {
        message: 'text'
    },

    beforeCreate () {
        console.log('beforeCreate');
    },

    created() {
        console.log('created');
    },

    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated () {
        console.log('updated');
    },
    beforeDestroy () {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
})


app.message = 'hello';










