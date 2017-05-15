var Product = require('./models/product');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('localhost:27017/mystore');

var products = [
    new Product({
        imagePath: 'http://placehold.it/350x350',
        title: 'lorme ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui minus ipsam maiores magnam blanditiis ipsum omnis architecto, neque corporis soluta possimus hic inventore amet fugit doloribus vel sunt quasi.',
        price: 10
    }),
    new Product({
        imagePath: 'http://placehold.it/350x350',
        title: 'lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui minus ipsam maiores magnam blanditiis ipsum omnis architecto, neque corporis soluta possimus hic inventore amet fugit doloribus vel sunt quasi.',
        price: 20
    }),
    new Product({
        imagePath: 'http://placehold.it/350x350',
        title: 'lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui minus ipsam maiores magnam blanditiis ipsum omnis architecto, neque corporis soluta possimus hic inventore amet fugit doloribus vel sunt quasi. ',
        price: 40
    }),
    new Product({
        imagePath: 'http://placehold.it/350x350',
        title: 'lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui minus ipsam maiores magnam blanditiis ipsum omnis architecto, neque corporis soluta possimus hic inventore amet fugit doloribus vel sunt quasi.',
        price: 15
    }),
    new Product({
        imagePath: 'http://placehold.it/350x350',
        title: 'lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui minus ipsam maiores magnam blanditiis ipsum omnis architecto, neque corporis soluta possimus hic inventore amet fugit doloribus vel sunt quasi.',
        price: 50
    }),
    new Product({
        imagePath: 'http://placehold.it/350x350',
        title: 'lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui minus ipsam maiores magnam blanditiis ipsum omnis architecto, neque corporis soluta possimus hic inventore amet fugit doloribus vel sunt quasi.',
        price: 50
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}