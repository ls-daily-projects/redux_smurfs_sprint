1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    - Array#map()
    - Array#filter()
    - Array#find()

    - Object#assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are events. Reducers are the mechanism that you use to derive a new state from a previous state. The store is your app's data. The source is known as a single source of truth because... it is — or at least, should be — your app's single source of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    This answers itself — app state is for apps; component state is for components. If the state can be localized to a component, localize it. Only lift up the state when necessary.

1.  What is middleware?
    Functions that exist in a list of other functions. It's the way the Chain of Responsibility pattern often manifests in web apps.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Weird name for a function that returns a function. `redux-thunk` allows your redux actions to exhibit asynchronous behavior. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

    What is `connect()` for $200, Alex.