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

var program = require('commander');
program
    .version('0.0.1')
    .on('--help', function(){
        console.log('  Example: \n');
        console.log('    $ randal joe sally bob');
        console.log('    bob joe sally\n');
    })
    .parse(process.argv);

console.log(randal.apply(null, program.args).join(' '));