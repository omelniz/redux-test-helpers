export function testReducer(reducer, initialState) {
  if (!(this instanceof testReducer)) {
    return new testReducer(reducer, initialState);
  }

  this.state = reducer(initialState, {type: 'MOCK_ACTION'});

  this.applyActions = function (actions = []) {
    actions.forEach((action) => {
      this.put(action);
    });

    return this;
  };

  this.put = function (action) {
    this.state = reducer(this.state, action);
    return this;
  };

  this.expect = function (selector, value) {
    expect(selector(this.state)).toEqual(value);
    return this;
  };

  this.test = function (label, callback) {
    if (!label) throw new Error('Provide label attribute');

    callback(this.state);
    return this;
  };

  this.getState = function () {
    return this.state;
  };
}
