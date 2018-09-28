# Example Component Library

[Theia](https://github.com/coursehero/theia)

## Template

You may use this as a starting off point for your own CL.

Don't go above Webpack 4.16.2 - as of this writing, there is a [bug with output libraries](https://github.com/webpack/webpack/issues/8099). Unclear what version introduced it, but 4.16.2 for sure works.

## Hot Code Reloading

To use hot code reloading, set `window.ComponentLibraries[CL].MythosApp.HotReload` to a function that accepts a React component, and renders it in the mounting element.

```js
const CL = '@my/cl-name'
const render = (MyApp) => {
  ReactDOM.hydrate(<MyApp {...window.__PROPS__} />, document.getElementById('app'))
}
window.ComponentLibraries[CL].MythosApp.HotReload = render
```
