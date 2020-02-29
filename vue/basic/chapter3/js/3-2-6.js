let app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        //アップロードファイルを準備
        onchange: function() {
            let fl = this.$refs.upfile.files[0];
            let data = new FormData();
            data.append('upfile', fl, fl.name);
            //サーバーにデータ送信
            fetch('upload.php', {
                method:'POST',
                body: data,
            })
            //成功時には結果を表示
            .then(function(response) {
                return response.text();
            })
            .then(function(text) {
                this.message = text;
            })
            //失敗時にはエラーメッセージをダイアログ表示
            .catch(function (error) {
                window.alert('Error:' + error.message);
            });
        }
    }
});