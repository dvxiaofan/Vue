/*
 * @Author: DevZhang 
 * @Date: 2019-05-31 22:30:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-27 13:11:59
 */


Vue.component('bodyContent', {
    props: ['content'],
    data: () => {
        return {
            list: [1, 3, 5, 9]
        }
    },
    template: `
        <div>
            <ul>
                <slot v-for='item of list'
                    :item='item'>
                </slot>
            </ul>
        </div>`
})

let app = new Vue({
    el: '#app'
})









