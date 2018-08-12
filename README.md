<p align="center">
  <img src="./readme/logo.png" width="120px" alt="" />
</p>

# Super tslint
An extension of the tslint library adding the ability to watch files, better handle multiple nested tsconfigs, and more human readable output.

# Installation
install the npm package 
```
> npm i -g super-tslint
```
or if you prefer to install it local to your project
```
> npm i --save-dev super-tslint
// and to use it reference it locally
> node ./node_modules/super-tslint/bin/super-tslint ...
```

# Usage
### Lint a project
```
> super-tslint --project example/project-a/tsconfig.json
```

### Lint and auto fix a project
```
> super-tslint --fix --project example/project-a/tsconfig.json
```

### Lint all nested tsconfigs
this will lint all ts projects nested from the current directory
```
> super-tslint --all
```

### Lint and watch for changes
```
> super-tslint --watch --project example/project-a/tsconfig.json
```

### Lint and watch all 
```
> super-tslint --watch --all
```

### Inspire yourself to write better code
```
> super-tslint --quote
```

### Example output
<p align="center">
  <img src="./readme/output.png" alt="" />
</p>
