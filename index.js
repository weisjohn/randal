#!/usr/bin/env node

var fs = require('fs');

// Randal helps pick the order for the game
var randal = module.exports = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    var rand, shuffle = [];
    while (args.length) { 
        rand = Math.floor(Math.random() * args.length);
        shuffle.push(args.splice(rand,1)[0]);
    }
    return shuffle;
}

// support data from stdin
var data = "";
process.stdin.on('data', function() {
    data += chunk;
});
process.stdin.on('write', function() {
    data = data.split(' ');
    if (data.length) {
        console.log('data');
        console.log(randal.apply(null, data).join(' '));    
    }
});


var program = require('commander');
program
    .version('0.0.3')
    .on('--help', function(){
        console.log('  Example: \n');
        console.log('    $ randal joe sally bob');
        console.log('    bob joe sally\n');
    })
    .parse(process.argv);

// don't output an empty list
if (program.args.length) {
    var args = program.args;
    if (program.args.length === 1 && program.args[0] == "/dev/fd/63") {    
        args = fs.readFileSync("/dev/fd/63");
        args = args.toString('utf-8').replace("\n", "").split(" ");
    } 

    console.log(randal.apply(null, args).join(' '));    
}
