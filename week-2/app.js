// ---Assignment 1: Function and Array
function max(...numbers){
    var i ;
    var max = -Infinity;

    for(i=0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}

// ---Assignment 2: Object
function calculate(args){
    let result;
    if(args.op==="+"){
        result=args.n1+args.n2;
    }else if(args.op==="-"){
        result=args.n1-args.n2;
    }else{
        result="Not supported";
    }
        return result;
    }
    // Try to call calculate function correctly
var args = new Object();
args.n1 = 3;
args.n2 = 4;
args.op = '+';

function Args(op, n1, n2){
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
}

var arg1 = new Args('-', 7, 4);
var arg2 = new Args('+', 2, 8);



// ---Assignment 3: Function, Array, and Object
function avg(data){
    var total = 0;
    var avg = 0;
    for (i=0; i < data.size; i++){
        total += data.products[i].price;
    }
    avg = total / data.size;
    return avg;
};
avg({
    size:3,
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
}); // show the average price of all products


// ---Assignment 4: HTML DOM and Event Handling   
//  ---Request 1: Click to Change Text.

var head = document.querySelector('h1');

head.addEventListener('click',() =>{
    head.textContent = "Have a Good Time!";
});

//  ---Request 2: Click to Show/Close Menu.
var ham = document.querySelector('.hamburger');
var fixed = document.querySelector('.fixed');
var exit = document.querySelector('.exit');

ham.addEventListener('click', () => {
    fixed.style.right = "0%";
});

exit.addEventListener('click', () => {
    fixed.style.right = "-40%";
});

//  ----Request 3: Click to Show More Content Boxes.
var call = document.querySelector('.call');
var more = document.querySelector('.more');

call.addEventListener('click', () => {
    more.style.display = "flex";
});

//---Assignment 5: Algorithm Practice (Advanced Optional)
function twoSum(nums, target){
    var i, j;

    for (i=0; i < nums.length; i++){
        for (j=1; j < nums.length; j++){
            if(nums[i] + nums[j] == target ){
                return [i, j];
            }
        }
    }
}
