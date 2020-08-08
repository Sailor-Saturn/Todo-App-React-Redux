# Todo-App-React-Redux

This is a challenge I did. Basically is building a app using react redux.


## Steps to create the todo app:
1. npx create-react-app todo-app --template redux;
2. Remove features/counter and the respective reducer + any reference related to the counter app;

## Actions

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.
For the case of the to do app we need the following actions:

1. Add todo;
2. Toggle todo - type of action related to a user ticking off a todo as completed;
3. Visibility filter - action to show the current todos or the completed todos, there are several types;

Every action needs a type and a payload. In the case of the add todo, will be the content of the own todo, the remove todo is the index of the todo and the toggle as well. For the visibility filter the payload will be the type of filter applied.

All of the actions are in the file action.js

## Reducers
While thinking about the different states of the application I see the following:
A state for the todos on our app and the state for the the currently visibility filter. For this case it's necessary to separate the visibility filter from the list of the todos.

To set the todo tasks that are completed or not it's just necessary to add a completed attribute for each todo. To remove each todo is necessary to also have a attribute called id.

Example:
```Javascript
    {
        visibilityFilter: 'SHOW_COMPLETED',
        todos: [
            {
                id: '11235'
                text: 'Todo #1'
                completed: true
            },
            {
                id: '81321'
                text: 'Todo #2'
                completed: false
            }
        ]
    }
```

Since I defined the state I can write the respective reducer. In this case, a reducer is a pure function that takes a **state** and a **action** and returns the next state.

The first idea about creating the reducers, we only need to create a main reducer and do some type of a switch case.
The problem with just having on switch case is each reducer is managing all of the state. For the reducers we will do a **reducer composition** so that each reducer manages it's own state.

Also we will add the function combineReducers(). This generates a function that calls your reducers with the slices of state selected according to their keys, and combines their results into a single object again. It's not magic. And like other reducers, combineReducers() does not create a new object if all of the reducers provided to it do not change state.


## Presentational Components

From the image given for the challenge I can split it and make the following components.

![Imgur](https://imgur.com/nCFPP4b.png)

Basically we have the following components:
1. TodoList (a list of visible todos);
2. Todo (a single todo item that has a text, if it's completed and a onClick function to mark the todo as completed);
3. Footer (where the user has the different filters and the number of tasks left);
4. App, root component that renders everything;

