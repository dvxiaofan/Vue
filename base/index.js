/*
 * @Author: DevZhang 
 * @Date: 2019-05-31 22:30:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-27 13:03:58
 */


Vue.component('bodyContent', {
    props: ['content'],
    template: `
        <div>
            <slot name='header'></slot>
            <div class='content'>content</div>
            <slot name='footer'></slot>
        </div>`
})

let app = new Vue({
    el: '#app'
})









