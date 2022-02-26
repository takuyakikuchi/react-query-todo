## About
This is a repository for the workshop from the udemy course [High Performance React development](https://github.com/GomaGoma676/react-query-rtk-todos)

## To get started

1. Run REST server with Pycharm
2. Start the client with `$ yarn start`

## Memo from implementation

### 1. CRUD without state management libraries

Pains
- To reflect the changes in the state after each actions(create, update and delete), I need to refresh the page with `window.location.reload()`.
- When editing, the selected task needs to be watched by `useEffect` and reflected in the local state.
- Prop drilling with `selectedTask` and the update function.

