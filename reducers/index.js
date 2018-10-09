export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      var i;
      for (i = 0; i < 10000; i++) {
        // return state + i;
      }
      return state + i;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
