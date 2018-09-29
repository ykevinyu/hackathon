var statusManager = new Vue({
    el: '#statusManager',
    data: {
        status: 'SAFE',
    },
    methods:{
        init: function() {
            this.status = 'DANGER';
        }
    }
});

