(function() {

  window.Todos = function(options) {

    var todos = options.props.todos;

    var $todoList = $(
      '<div class="todo-list">' +
        '<h1>My Todos</h1>' +
        '<div class="todos"></div>' +
        '<div class="new-element">' +
          '<input class="new-element-input" placeholder="Add todo"></input>' +
        '</div>' +
      '</div>'
    );

    var $newElementInput = $todoList.find('.new-element-input');
    var $elements = $todoList.find('.todos');

    function update() {
      $elements.html('');

      var $ul = $('<ul />').appendTo($elements);

      todos.forEach(function(todo, idx) {
        $ul.append(
          '<li class="todo ' + (todo.done ? 'done' : '') + '">' +
            '<label>' +
              '<input data-todo-idx="' + idx + '" type="checkbox" ' + (todo.done ? 'checked' : '') + '/> ' + todo.name +
            '</label>' +
          '</li>'
        );
      });
    }

    $elements.on('change', 'input[type=checkbox]', function(event) {
      var target = event.target;

      var todoIdx = parseInt(target.dataset.todoIdx, 0);

      todos[todoIdx].done = target.checked;

      update();
    });

    $newElementInput.on('keydown', function(event) {

      if (event.key === 'Enter' && event.target.value) {
        todos.push({ name: event.target.value, done: false });
        event.target.value = '';

        update();
      }
    });

    $(options.target).append($todoList);

    update();
  };
})();