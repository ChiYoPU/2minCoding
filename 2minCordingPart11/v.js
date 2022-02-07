new Vue({
    el: '#app',
    computed: {
        tabNames: function(){
            return Object.keys(this.tabs);
        }
    },

    data: {
        current: 'tab1',
        tabs: {
            'tab1': 'タブ1',
            'tab2': 'タブ2',
            'tab3': 'タブ3'
        }
    }
});