module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "quotes": ["error","double"]
    },
    "overrides":[
        {
            "files": ['*.test.js','test/**/*.js'],
            "excludedFiles": ['test/*/*.js'],
            "rules": {
                "quotes": ["error","single"]
            }
        }
    ]
};