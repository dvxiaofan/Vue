/*
 * @Author: DevZhang 
 * @Date: 2019-05-31 22:30:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-05 16:29:14
 */



Vue.component('my-component', {
    template: '#my-component'
})


new Vue({
    el: "#demo",
    data: {
        showDiv: false
    },

    methods: {
        getText() {
            this.showDiv = true;
            this.$nextTick(function() {
                let text = document.getElementById('div').innerHTML;
                console.log('text: ', text);
            })
        }
    }
})











