Vue.component('tab1',{
    template: '<div class="tab"><p>これはtab1のテストです</p></div>'
});

Vue.component('tab2',{
    template: '<div class="tab"><p>これはtab2のテストです</p></div>'
});

Vue.component('tab3',{
    template: '<div class="tab"><p>これはtab3のテストです</p></div>'
});

new Vue({
    el: '#app',
    methods: {
        onclick: function(tab){
            this.current = tab;
        }
    },

    computed: {
        tabNames: function(){
            return Object.keys(this.tabs);
        },
        currentTab: function(){
            return this.current;
        }
    },

    data: {
        current: 'tab1',
        tabs: {
            'tab1': 'タブ1を表示する',
            'tab2': 'タブ2を表示する',
            'tab3': 'タブ3を表示する'
        }
    }
});
