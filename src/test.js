let state = [2,3,4,4, 500, 5,1,9, 100, 300, 5,6,7,8];
console.log(state);

let new_state = state.filter((value, index, self) => {return self.indexOf(value) === index});
new_state.sort(function(a, b){return a-b});
console.log(new_state);

new_state.splice(new_state.indexOf(4), 1);
console.log(new_state);

