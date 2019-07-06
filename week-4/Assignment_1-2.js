// Assignment 1: Callback Function
function delayedResult(n1, n2, delayTime, callback ){
    // your code here
    let result = n1 + n2;
    window.setTimeout( callback, delayTime, result);
};
delayedResult(4, 5, 3000, function(result){
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function(result){
    window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds


// Assignment 2: Callback Function and Advanced HTML DOM
function ajax(src, callback){
    // your code here
    fetch(src, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(callback)
    .catch(function(error){
        console.log(error);
    }
)};


function render(data){
    // your code here.
    // document.createElement() and appendChild() methods are preferred.
    let productList = document.querySelector("#productList");
    let newLi;

    for (i=0; i < data.length; i++){
        newLi = document.createElement("li");
        newLi.textContent += data[i].name +" (" + data[i].description + ") " + " 價錢:" + data[i].price ;
        productList.appendChild(newLi);
    }

        
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
}); // you should get product information in JSON format and render data in the page