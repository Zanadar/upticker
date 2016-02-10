#### Uptick

This is a simple module that exports a [Through2](https://www.npmjs.com/package/through2) compatible
transform.

It's extremely specific. I built it for Nand2Tetris to help with writing out bus outputs.
Given input that looks like
```
Whatver [0] whatver[0]
Whatver [0] whatver[0]
Whatver [0] whatver[0]
Whatver [0] whatver[0]
Whatver [0] whatver[0]
```
Run it as eg. `pbcopy | uptick | pbcopy`
It produces output that looks like this:
```
Whatver [0] whatver[0]
Whatver [1] whatver[1]
Whatver [2] whatver[2]
Whatver [3] whatver[3]
Whatver [4] whatver[4]
```
