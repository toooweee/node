// npm - global command, comes with node
// npm --v

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm i -g <packageName

// package.json - manifest file (stores important info about project and packages)
// manual approach (create package.json in the root, create properties etc)
// npm init -y

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(items);

console.log(newItems);
