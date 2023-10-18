// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log(sum);
  return sum;
}

add(1, 2, 3, 4, 5);
