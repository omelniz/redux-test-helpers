# Redux Test Helpers

Make testing redux great again

## Usage

```js
it("should toggle loading state", () => {
  import { testReducer } from "redux-test-helpers";

  testReducer(reducer)
    .expect(selectLoading, false)

    .put(actions.fetchRequest())
    .expect(selectLoading, true)

    .put(actions.fetchSuccess())
    .expect(selectLoading, false)

    .put(actions.fetchRequest())
    .put(actions.fetchFail())
    .expect(selectLoading, false);
});
```
