foo = 2
console.log(foo)
var foo;

hoisted();

function hoisted() {
    console.log("foo")
};

let bar;
bar = 2;
console.log(bar)

baz = 2;
console.log(baz);
// const baz = 0;

var x = 10;
console.log(x, y)
var y = 7