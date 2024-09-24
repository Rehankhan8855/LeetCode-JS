// // #LeetCode Problem Solve
// // 2>Counter2.

var createCounter = function(init) {
    let n = init;  
    let obj = {
        increment() {
            return init += 1;  // Increase by 1
        },
        decrement() {
            return init -= 1;  // Decrease by 1
        },
        reset() {
            return init = n;  // Reset to the initial value
        }
    };
    return obj;
};

const counter = createCounter(5);
console.log(counter.increment());  // Output: 6
console.log(counter.reset());      // Output: 5
console.log(counter.decrement());  // Output: 4


// 3>Filter Elements from Array.
var filter = function(arr,fn){
    const newarr= [];

    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            newarr.push(arr[i])
        }
    }
    return newarr
}
const filterResult = filter([0,10,20,30],(num)=>num>10);
console.log(filterResult)

// 2.eg>
function filter (arr,fn){
    const newarr = [];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            newarr.push(arr[i])
        }
    }
    return newarr
}
const result = filter([1,2,34,5,6,7,8,10],(num)=>num %2==0);
console.log(result)


// 4>Array Reduce Transformation.
var reduce = function (nums, fn, init){
    let total = init;

    for(let i=0;i<nums.length;i++){
        total = fn(total , nums[i])
    }
    return total
}
const reduceResult = reduce([1,2,3,4],(total,num) => total+num,0);
console.log(reduceResult)



// 5>Function Composition
var compose = function(functions){
    return function(x){
        for(let i=functions.length -1;i>=0;i--){
            x = functions[i](x)
        }
        return x
    }
}

let add2 = function(x){
    return x+2;
};

let multiply3 = function (x){
    return x*3;
};
const composedFunction = compose([add2 , multiply3]);
console.log(composedFunction(8))


// 6>Return length of arguments passed.
var argumentsLength = function(...args){
    return args.length;
}
const argumentsResult = argumentsLength(5);
console.log(result)

// 7>Allow one Function called.
var once = function(fn){
    let called =false;
    return function(...args){
        if(called){
            return undefined
        }
        called=true;
        return fn(...args)
    }
}
let onLog=once(function(massage){
    console.log(massage)
})
console.log(onLog("hello world"))
console.log(onLog("hello rehan"))

