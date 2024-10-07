function IPrints(stuff) {
    console.log(stuff);
}

function allTheTesting() {
    IPrints("Variables:\n");
    let number = 10;
    IPrints(number);
    IPrints("Now the Number Will Change to 12");
    number = 12;
    IPrints(number);

    IPrints("'const' doesnt change");
}