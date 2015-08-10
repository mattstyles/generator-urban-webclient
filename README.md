
# generator-urban-webclient

> Yeoman generator for a babel and react web client

```
npm run build
npm run watch
npm run serve
npm test
```

## Tooling

* `babel` and `browserify` - turn modern JS into stuff browsers love
* `react` - the JS build handles jsx just fine, but it’s optional
* `ho` and `less` - by default CSS get compiled with less, autoprefixer and cleancss
* `html` and `mustache` - simple mustache transform to create a minimal `html` file
* `polyfill` - uses the default `babel` polyfill (based on `corejs`) and adds a `fetch` polyfill
* `linting` - contains minimal defaults for `eslint`, mainly to make it play nicely with `babel`-style code and `react` although there are some codestyle rules in there you’ll want to play with based on your own project style
* `livereload` - `serveur` contains a livereload implementation, but it seems a little temperamental at the moment, you’ll need the chrome plugin to get it to do what it should
