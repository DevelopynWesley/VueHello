var app = new Vue({
    el: '#app',
    data: {
        hello_world: 'Hello World!',
        product: 'Socks',
        description: 'Woolly',
        image: './images/greensock.png',
        details:["80% Cotton","20% Polyester","Unisex"],
        hellos:["Hello World"]
        },

methods:{

say_hello: function() {
    this.hellos.push(this.hello_world);
}


}


})

