// helloWorld function 
// function statement syntax functionhelloWorld(){
//     return "Hello, World!";}
// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}
function sayHello (input){
    if (input === "Alex"){
        return "Hello, Alex!";
    }else if(input === "Pat"){
        return "Hello, Pat!";
    } else if (input === "Jane"){
    return "Hello , Jane";
    }else if ( input === undefined ){
        return "Hello, World!";
    }else if (input === true) {
        return "Hello, World!";
    } else{
        return "Hello, World!"
    }
    return "Hello, " + input + "!";
}
function isFive(input) {
    if  (input === 5){
        return true
    }else if (input === "5"){
        return "string";
    }
    return (typeof input === 'boolean');
}
function isEven(input){
    if (input % 2 === 0){
        return true
    }else if (input % 2 ===0 ){
        return true
    }else if (input % 2===0){
        return false
    }else if (input %2 ===0){
        return false
    }else if (input %2 === 0){
        return true
    }else if (input%2===0){
        return false
    }else if (input %2===0){
        return false
    }else if (input %2 ===0){
        return false
    }else if (input %2===0){
        return false
    }
    return (typeof input ===' boolean')
}



// function sum(a, b){
//     if (b === "sheep"){
//         return false;
//     }
//     return a + b;
// }