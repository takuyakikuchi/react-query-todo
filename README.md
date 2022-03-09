## About
This is a repository for the workshop from the udemy course [High Performance React development](https://github.com/GomaGoma676/react-query-rtk-todos)

## To get started

1. Run REST server with Pycharm
2. Start the client with `$ yarn start`

## Memo from implementation

### 1. CRUD without state management libraries

Pains
- [x] 1. To reflect the changes in the state after each actions(create, update and delete), I need to refresh the page with `window.location.reload()`.
- [ ] 2. When editing, the selected task needs to be watched by `useEffect` and reflected in the local state.
- [x] 3. Prop drilling with `selectedTask` and the update function.

### 2. Add React Query
[React Query - Hooks for fetching, caching and updating asynchronous data in React](https://react-query.tanstack.com/)

Benefits
- Queries and mutations are centralized to React Query.
  - The query/mutation status(loading, error...) is provided by React Query
- Server cache is visible with React Query Dev Tools.
- By updating the cache, data fetching can be omitted after each mutation. => Solves the pain 1

### 3. Add Redux Toolkit
[Redux Toolkit | Redux Toolkit](https://redux-toolkit.js.org/)

Benefits
- Prop drilling can be avoided.
  - Re-rendering happens only on the relevant components.

### 4. Memoize

Benefits
- Reduce the number of re-rendering

Disadvantages
- It can be verbose.
- 