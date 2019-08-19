# todo-list-comparison (2019 version)

A simple todo-list, implemented using [jQuery](https://jquery.com) (2010 version), [React](https://reactjs.org/), and [Svelte](https://svelte.dev/) (2019 versions).

![demo](./docs/screencapture.gif)


## Take Aways

* __2010:__ life is good, our front-end is small and fast
* __2016:__ DOM updates are the bottleneck
* __2016:__ let's add virtual DOM and update only parts of the DOM that changed
* __2018:__ re-computing virtual DOM is super slow in bigger applications
* __2018:__ a compiler outputs JS that syncs the DOM efficiently like we did in 2010


## A Non-Virtual DOM Paint-Cycle

```
while (dataChangeDetected) {
  applyDataEffects();
  queueDOMUpdates();
}

raf(() => {
  if (domUpdates) {
    flushDOMUpdates();
  }
});
```


## How Can a Compiler Help

* Bake change detection into the app
* Bake local, efficient updates into the app


## Build

```
npm install
npm run build
npm start
```


## License

MIT
