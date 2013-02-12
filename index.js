// Randal helps pick the order for the game
module.exports = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    var rand, shuffle = [];
    while (args.length) { 
        rand = Math.floor(Math.random() * args.length);
        shuffle.push(args.splice(rand,1)[0]);
    }
    return shuffle;
}