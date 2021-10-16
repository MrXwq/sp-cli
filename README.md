1. npm link / yarn link 前，先看看package.json里面有没有配置下面这个
```json
"bin": {
    "sp-cli": "./bin/cli.js"
},
```