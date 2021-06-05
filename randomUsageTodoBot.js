var randBot = setInterval(function(){
var theFunctions = [];

for (var prop in rand) {
    if (typeof rand[prop] == 'function') {
        theFunctions.push(prop);
    }
}


var randomFunctionIndex = Math.floor(Math.random()*theFunctions.length);

rand[theFunctions[randomFunctionIndex]]();
}, 1000);


//clearInterval
