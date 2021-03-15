#!/usr/bin/env node

var fs = require('fs')
  , randal = require('./index')
  , play = require('play')
  ;

// set up the cli
var program = require('commander');
program
    .version('0.0.3')
    .on('--help', function(){
        console.log('  Example: \n');
        console.log('    $ randal joe sally bob');
        console.log('    bob joe sally\n');
    })
    .option('-d, --drumroll', 'Play a drumroll for a couple seconds before displaying output')
    .parse(process.argv);

function ret(args) {
    if (program.drumroll) {
        play.sound('drumroll.wav', function() {
            console.log(randal.apply(null, args).join(" "));
        });
    } else {
        console.log(randal.apply(null, args).join(" "));
    }
}

// don't output an empty list
if (program.args.length) {

    // handle the redirction file descriptor
    // e.g. $ ./index.js <(echo "foo bar joe")
    var args = program.args;
    if (program.args.length === 1 && program.args[0] == "/dev/fd/63") {    
        args = fs.readFileSync("/dev/fd/63");
        args = args.toString('utf-8').replace("\n", "").split(" ");
    } 

    ret(args);   

} else {

    // support data from stdin
    var data = "";
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function(chunk) {
        data += chunk;
    });
    process.stdin.on('end', function() {
        data = data.replace("\n", "").split(' ');
        if (data.length) {
            ret(data);
        }
    });
}
