// Immediately Invoked Function Expression (IIFE)
//sometimes global scope pollution creates problem to resolve that IIFE is used
(function chai(){
    //named IIFE
    console.log('DB Connected');
})(); // semicolon is imp to stop the effect of IIFE

(() => {
    console.log("DB connected two");
    
})();

((name) => {
    console.log(`DB connected Two ${name}`);
    
})('Gudiya')