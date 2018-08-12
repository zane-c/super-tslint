<p align="center">
  <img src="logo.png" width="120px" alt="" />
</p>

# Super tslint
An extension of the tslint library adding the ability to watch files, better handle multiple nested tsconfigs, and more human readable output.

# Installation
install and save the npm package 
```
> npm i --save-dev super-tslint
```

# Useage
### lint a project
```
> super-tslint --project example/project-a/tsconfig.json
```

### lint and auto fix a project
```
> super-tslint --fix --project example/project-a/tsconfig.json
```

### lint all nested tsconfigs
this will lint all ts projects nested from the current directory
```
> super-tslint --all
```

### lint and watch for changes
```
> super-tslint --watch --project example/project-a/tsconfig.json
```

### lint and watch all 
```
> super-tslint --watch --all
```

### Inspire yourself to write better code
```
> super-tslint --quote
```
