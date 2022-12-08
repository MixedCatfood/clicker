let numberClicks = 0;
let unit1 = {
    name: 'unit1',
    cost: 10,
    production: 1,
    quantity: 0
};
let unit2 = {
    name: 'unit2',
    cost: 100,
    production: 5,
    quantity: 0
}
let unit3 = {
    name: 'unit3',
    cost: 1000,
    production: 100,
    quantity: 0
}
let unit4 = {
    name: 'unit4',
    cost: 10000,
    production: 1000,
    quantity: 0
}
let brainProduction = unit1.production * unit1.quantity + unit2.production * unit2.quantity + unit3.production * unit3.quantity + unit4.production * unit4.quantity;
// checks for price and makes sure price is less than score
function purchase(unit) {
    let price = unit.cost;
    if(price <= numberClicks){
        numberClicks -= price;
        unit.quantity = unit.quantity + 1;
        unit.cost = Math.floor(unit.cost * 1.5);
        brainProduction += unit.production;
        document.getElementById('score').innerHTML = `Brains: ${numberClicks}`;
        // updateScore();
        updateBrainProductionInHTML();
        updateUnitCostInHTML(unit);
    }
}
function updateUnitCostInHTML(unit) {
    switch(unit) {
        case unit1:
            document.getElementById('unit1Cost').innerHTML = `Price: ${unit1.cost} brains`;
            break;
        case unit2:
            document.getElementById('unit2Cost').innerHTML = `Price: ${unit2.cost} brains`;
            break;
        case unit3:
            document.getElementById('unit3Cost').innerHTML = `Price: ${unit3.cost} brains`;
            break;
        case unit4:
            document.getElementById('unit4Cost').innerHTML = `Price: ${unit4.cost} brains`;
    }
}
function updateBrainProductionInHTML() {
    document.getElementById('production').innerHTML = `Brains per second: ${brainProduction}`
}
function clickButton(){
    numberClicks ++;
    document.getElementById('score').innerHTML = `Brains: ${numberClicks}`;

}
function idleBrainProduction() {
    let counter = 0;
    let target = numberClicks + brainProduction;
    let countSpeed = Math.ceil(brainProduction / 10)
    if(brainProduction >= 10){
        let i = setInterval(function(){
            numberClicks += countSpeed;
            document.getElementById('score').innerHTML = `Brains: ${numberClicks}`;
            counter ++;
            if(counter === 10) {
                clearInterval(i);
            }
        }, 100)
    } else if(brainProduction > 0){
        let i = setInterval(function(){
            numberClicks ++;
            document.getElementById('score').innerHTML = `Brains: ${numberClicks}`;
            counter ++;
            if(counter === brainProduction) {
                clearInterval(i);
            }
        }, Math.floor(1000 / brainProduction))
    }
}
// function bakeCookies(){
//     document.cookie = "numberClicks=" + numberClicks + ";unit1Cost=" + unit1.cost +";unit1Quantity=" + unit1.quantity + ";unit2Cost=" + unit2.cost +";unit2Quantity=" + unit2.quantity + ";unit3Cost=" + unit3.cost + ";unit3Quantity=" + unit3.quantity + ";unit4Cost=" + unit4.cost + ";unit4Quantity=" + unit4.quantity + ";expires";
//     alert("Cookies Saved");
// }
// function loadCookies(){}
// setInterval(bakeCookies, 1000 * 60);
// setInterval(updateScore, 1000);
setInterval(idleBrainProduction, 1000);