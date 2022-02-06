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
    data: {
        current: 'tab1',
        tabs: {
            'tab1': 'タブ1',
            'tab2': 'タブ2',
            'tab3': 'タブ3'
        }
    }
})