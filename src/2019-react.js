import React from 'react/cjs/react.production.min';
import ReactDOM from 'react-dom/cjs/react-dom.production.min';

class Todos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: props.todos
    };
  }

  handleChanged(idx) {

    return (event) => {
      const { todos } = this.state;

      const todo = todos[idx];

      this.setState({
        todos: [
          ...todos.slice(0, idx),
          {
            ...todo,
            done: event.target.checked
          },
          ...todos.slice(idx + 1)
        ]
      });
    };

  }

  handleInputKey(event) {

    const {
      key,
      target
    } = event;

    if (key !== 'Enter' || !target.value) {
      return;
    }

    const {
      todos
    } = this.state;

    this.setState({
      todos: [
        ...todos,
        { name: target.value, done: false }
      ]
    });

    target.value = '';
  }

  render() {

    const {
      todos
    } = this.state;

    return (
      <div class="todo-list">
        <h1>My Todos</h1>

        <div class="todos">
          <ul>
            {
              todos.map((todo, idx) => {
                return (
                  <li className={ 'todo ' + (todo.done ? 'done' : '') }>
                    <label>
                      <input
                        type="checkbox"
                        checked={ todo.done }
                        onChange={ this.handleChanged(idx) }
                      /> { todo.name }
                    </label>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div class="new-element">
          <input
            class="new-element-input"
            placeholder="Add todo"
            onKeyDown={ this.handleInputKey.bind(this) }
          />
        </div>
      </div>
    );
  }
}

export default function(options) {

  const {
    props,
    target
  } = options;

  ReactDOM.render(
    <Todos { ...props } />,
    target
  );

};