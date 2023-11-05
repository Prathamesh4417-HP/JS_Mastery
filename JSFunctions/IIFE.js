// Immediately Invoked Function Expressions (IIFE)


(function chai(){ // Named IIFE
    console.log("DB Conected");
})
();     // Semicolon is very important after IIFE function declaration

(function Connection() {
    console.log(`DB Connected Two`);
})
();

((name) => {
    console.log(`Name of game: ${name}`);
})
(`Cricket`)

// (Function definition) (Function Execution)  to avoid global polution of variables we used IIFE function
// chai()