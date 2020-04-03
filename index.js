export function testReducer(reducer, initialState) {
  if (!(this instanceof testReducer)) {
    return new testReducer(reducer, initialState);
  }

  this.state = reducer(initialState, { type: "MOCK_ACTION" });

  this.put = function(action) {
    this.state = reducer(this.state, action);
    return this;
  };

  this.expect = function(selector, value) {
    expect(selector(this.state)).toEqual(value);
    return this;
  };
}
