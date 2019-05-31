/*
 * @Author: DevZhang 
 * @Date: 2019-05-31 22:30:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-31 22:51:24
 */



let app = new Vue({
    el: '#app',
    data: {
        todos: [
            {title: '1', text: 'one'},
            {title: '2', text: 'two'},
            {title: '3', text: 'three'},
            {title: '4', text: 'four'},
        ]
    }
})

app.todos.push({title: 9999, text: '999999'})











