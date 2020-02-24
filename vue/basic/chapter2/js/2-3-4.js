let app = new Vue({
    el: '#app',
    data: {
        name: '',
        upperName: ''
    },
    created: function() {
        this.delayFunc = _.debounce(this.getUpper, 2000);
    },
    watch: {
        name: function(newValue, oldValue) {
            console.log('name');
            this.delayFunc();
        }
    },
    methods: {
        getUpper: function() {
            this.upperName = this.name.toUpperCase();
        }
    }
});