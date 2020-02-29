new Vue({
    el:'#app',
    data: {
        list: [
            '赤パジャマ',
            '青パジャマ',
            '黄パジャマ',
        ],
        attr: 'width',
        size: 100,
    },
    methods: {
        onclick: function() {
            this.list.shift();
        }
    }
});