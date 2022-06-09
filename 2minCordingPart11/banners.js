Vue.component('banner-member',{
    temptale:
    `<div class="banner">
    <h3>WINGSメンバー募集中</h3>
    <p>あなたもプロジェクトに参加しませんか</p>
    </div>`
});

new Vue({
    el: '#app',
    created: function(){
        let that = this;
        this.interval = setInterval(function(){
            that.current = (that.current + 1)% that.components.length;
        }, 3000);
    },

    beforDestroy: function(){
        clearInterval(this.interval);
    },

    computed: {
        currentBanner: function(){
            return 'banner-' + this.components[this.current];
        }
    },

    data: {
        current: 0,
        components: [member]
    }
});