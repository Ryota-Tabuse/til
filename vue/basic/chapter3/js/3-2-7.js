new Vue({
    el: '#app',
    data: {
        temperature: 0,
        temp: 0,
        aaa: 0
    },
    methods: {
        onchange: function() {
            this.temp = this.temperature.toFixed(1);
        }
    }
});