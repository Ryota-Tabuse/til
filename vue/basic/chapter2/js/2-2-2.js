let app = new Vue({
    el: '#app',
    data: {
        email:'Y-Suzuki@example.com',
        current: new Date().toLocaleString()
    },
    //演算結果を出力するプロパティ
    computed: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        },
        randomc: function() {
            return Math.random();
        }
    },
    methods: {
        onclick: function() {
            this.current = new Date().toLocaleString();
        },
        randomm: function() {
            return Math.random();
        }
    }
});

