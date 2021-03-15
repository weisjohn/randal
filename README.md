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

He can play a drumroll to build suspense. Passed as a command line flag:
```bash
$ randal -d joe john jim
(plays drumroll)
john joe jim
```

Drumroll sound is licensed under [Creative Commons 0](https://creativecommons.org/publicdomain/zero/1.0/). Downloaded from [here](https://freesound.org/people/adriann/sounds/191718/).