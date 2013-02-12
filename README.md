randal
======

Randal picks the order for the game.

```bash
$ npm install -g randal
$ randal joe john jim
jim joe john
```

He also accepts redirection

```bash
$ randal <(echo "jim joe james john")
john jim james joe
```