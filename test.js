var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

// tests for generateId //


// up to here //

// tests for addTodo function //
test('check it returns unchanged todos object', function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];

  var actual = logic.todoFunctions.addTodo(todos)
  var expected = todos
  t.equal(actual, expected);
  t.end();
})

test('check add newtodo',function(t){
  var newTodo = {
    id: 2,
    description:'wash dishes',
    done: true
  }
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var actual = logic.todoFunctions.addTodo(todos,newTodo);
  var expected = todos.concat(newTodo);
  t.deepEqual(actual, expected);
  t.end();
})

test('check it has new id', function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];

  var newTodo = {description: "Help I can't code"}

  var actual = logic.todoFunctions.addTodo(todos, newTodo)
  var expected = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    },
    {
      id: 2,
      description: "Help I can't code",
      done: false
    }
  ]
  t.deepEqual(actual, expected);
  t.end();
})

// up to here //

// tests for deleteTodo function //
test("return same todo if don't delete", function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var actual = logic.todoFunctions.deleteTodo(todos);
  var expected = todos;
  t.deepEqual(actual, expected);
  t.end();
})

test("return new todos array without object with idToDelete", function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var todosCopy = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var idToDelete = 1;
  var actual = logic.todoFunctions.deleteTodo(todos, idToDelete);
  var expected = [{
      id: 0,
      description: 'smash avocados',
      done: true
    }];
  t.deepEqual(actual, expected);
  t.deepEqual(todos, todosCopy)
  t.end();
})

// up to here

// tests for markTodo function //
test("change done to true", function(t) {
  var todos = [{
      id: 0,
      description: 'smash avocados',
      done: false
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  var actual = logic.todoFunctions.markTodo(todos, 0);
  var expected = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];
  t.deepEqual(actual, expected);
  t.end();
})

// up to here //
