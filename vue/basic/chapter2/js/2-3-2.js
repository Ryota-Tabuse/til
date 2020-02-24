let app = new Vue({
    el: '#app',
    data: {
        author: {
            name: '山田',
            // company: ''
        }
    },
    //起動時にタイマーセット
    created: function() {
        let that = this;
        this.timer = setInterval(function() {
            // that.author.name = 'R.TABUSE';
            // that.author.company = 'WINGSプロジェクト';
            // Vue.set(that.author, 'company', 'WINGSプロジェクト');

            that.author = Object.assign({}, that.author, {company: '田伏プロジェクト', sex: 'male', age: 18});
        }, 3000);
    },

    //終了前にタイマーを破棄
    beforeDestroy: function() {
        clearInterval(this.timer);
    }
});