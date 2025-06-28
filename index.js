function trial1 (){
    console.log ("what will be consoled first")
}

// function trial2(){
//     console.log(" to be consoled second")
// }


function receivesAFunction (trial2){
    trial1();
    trial2();
}

function returnsANamedFunction (){
    return trial1;
}


function returnsAnAnonymousFunction(){
    return function (){}
}