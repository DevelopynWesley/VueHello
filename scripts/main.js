var app = new Vue({
    el: '#app',
    data: {
        hello_world: 'Hello World!'
        },

methods:{

    say_hello: function() {
        this.hellos.push(this.hello_world);
    }
}
})

