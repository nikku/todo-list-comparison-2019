# A Todo-List Technology Review (2019 version)

A simple todo-list, implemented using [jQuery](https://jquery.com) (2010 version), [React](https://reactjs.org/), and [Svelte](https://svelte.dev/) (2019 versions).

![demo](./docs/screencapture.gif)


## Take Aways

* __2008:__ life is good, our front-end is small and fast
* __2013:__ DOM updates are the bottleneck
* __2013:__ let's add _virtual DOM_ and update only parts of the DOM that changed
* __2014:__ re-computing _virtual DOM_ is super slow in bigger applications
* __2016:__ [a compiler](#how-can-a-compiler-help) outputs JS that syncs the DOM efficiently like we did in ~~2010~~ 2008


## A Non-Virtual DOM Paint-Cycle

```js
while (dataChange) {
  applyDataEffect(dataChange);
  queueDOMUpdates(dataChange);
}

raf(() => {
  if (domUpdates) {
    flushDOMUpdates(domUpdates);
  }
});
```


## How Can a Compiler Help

* Bake change detection into the app
* Bake local, efficient updates into the app
* Bundle only the components that the app needs
* Be non-existent at run-time


## Build

```
npm install
npm run build
npm start
```


## Resources

* [Frameworks Without the Framework](https://svelte.dev/blog/frameworks-without-the-framework)
* [Svelte: Building Front-End Applications Without Virtual DOM](https://speakerdeck.com/nikku/svelte-building-front-end-applications-without-virtual-dom)


## License

MIT
