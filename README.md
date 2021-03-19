randal
======

Randal picks the order for the game.

```bash
$ npm install -g randal
$ randal joe john jim
jim joe john
```

He also accepts redirection:

```bash
$ randal <(echo "jim joe james john")
john jim james joe
```

and 

```bash
$ echo "john paul george ringo" | randal 
paul george john ringo
```

Also accepts a limit for the number of entries wanted for output:

```bash
$ randal -l 2 "jim joe james"
jim james
```