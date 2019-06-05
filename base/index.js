/*
 * @Author: DevZhang 
 * @Date: 2019-05-31 22:30:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-05 09:35:25
 */


Vue.component('todo-item', {
    template: '\
        <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">Remove</button>\
        </li>\
        ',
        props: ['title']
})


new Vue({
    el: "#todo-demo",
    data: {
        newTodoText: '',
        todos: [
            { id: 1, title: 'title1' },
            { id: 2, title: 'title2' },
            { id: 3, title: 'title3' },
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})











