let app = new Vue({
    el: '#app',
    data: {
        message:'',
        result:'',
        path:'http://www.web-deli.com/image/linkbanner_l.gif'
    },
    methods: {
        onclick: function() {
            this.message = new Date().toLocaleString();
        },
        onmouseenter: function() {
            this.path = 'http://www.web-deli.com/image/home_chara.gif';
        },
        onmouseleave: function() {
            this.path = 'http://www.web-deli.com/image/linkbanner_l.gif';
        },
        onmousein: function(e) {
            this.result += 'Enter:' + e.target.id + '<br />';
        },
        onmouseout: function(e) {
            this.result += 'Leave:' + e.target.id + '<br />';
        }
    }
});
let app2 = new Vue({
    el: '#app2',
    data: {
        path:'http://www.web-deli.com/image/wings.jpg',
    },
    methods: {
        oneeror: function() {
            this.path = 'http://www.web-deli.com/image/noimage.jpg';
        }
    }
});
