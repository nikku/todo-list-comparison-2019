<div class="todo-list">
  <h1>My Todos</h1>

  <div class="todos">
    <ul>
      {#each todos as todo, idx }
        <li class="todo" class:done={ todo.done }>
          <label>
            <input
              type="checkbox"
              checked={ todo.done }
              on:change={ (event) => handleChanged(event, idx) }
            /> { todo.name }
          </label>
        </li>
      {/each}
    </ul>
  </div>
  <div class="new-element">
    <input
      class="new-element-input"
      placeholder="Add todo"
      on:keydown={ handleInputKey }
    />
  </div>
</div>

<script>
  export let todos;

  function handleChanged(event, idx) {
    const todo = todos[idx];

    todos = [
      ...todos.slice(0, idx),
      {
        ...todo,
        done: event.target.checked
      },
      ...todos.slice(idx + 1)
    ]
  }

  function handleInputKey(event) {

    const {
      key,
      target
    } = event;

    if (key !== 'Enter' || !target.value) {
      return;
    }

    todos = [
      ...todos,
      { name: target.value, done: false }
    ];

    target.value = '';
  }
</script>