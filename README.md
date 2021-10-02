![Preview](https://github.com/omelniz/redux-test-helpers/blob/master/redux-test-helpers.png)

# Redux Test Helpers

Make testing redux great again

## Installation
Install with yarn or npm.

```
npm install redux-test-helpers --save-dev
```

## Usage

The idea here is testing reducer, actions, and selectors together. 

Let`s prepare simple actions and selectors for our example:
```js
const selectLoading = state => state.loading;

const fetchRequest = () => ({type: "FETCH_REQUEST"});
const fetchSuccess = () => ({type: "FETCH_REQUEST"});
const fetchFail = () => ({type: "FETCH_REQUEST"});
```

then import testReducer helper:
```js
import { testReducer } from "redux-test-helpers";
```

and enjoy the magic of chain pattern
```js
it("should toggle loading state", () => {
  testReducer(reducer)
    .expect(selectLoading, false)

    .put(fetchRequest())
    .expect(selectLoading, true)

    .put(fetchSuccess())
    .expect(selectLoading, false)

    .put(fetchRequest())
    .put(fetchFail())
    .expect(selectLoading, false);
});
```
