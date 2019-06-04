/*
 * @Author: DevZhang 
 * @Date: 2019-05-31 22:30:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-04 17:41:50
 */



let app = new Vue({
    el: '#watch-demo',
    data: {
        question: '',
        answer: 'I cannot five you an answer until you ask a question!'
    },

    watch: {
        question(newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.debounceGetAnswer();
        }
    },

    created() {
        this.debounceGetAnswer = _.debounce(this.getAnswer, 500)
    },

    methods: {
        getAnswer() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Question usually contain a question mark.'
                return
            }
            this.answer = 'Thinking...'
            let vm = this;
            axios.get('https://yesno.wtf/api')
                .then(function(response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function(error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }

    
})












