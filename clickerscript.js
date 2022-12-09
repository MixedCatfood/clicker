let numberClicks = 0;
let unit1 = {
    name: 'unit1',
    cost: 10,
    production: .1,
    quantity: 0
};
let unit2 = {
    name: 'unit2',
    cost: 100,
    production: 1,
    quantity: 0
}
let unit3 = {
    name: 'unit3',
    cost: 1000,
    production: 10,
    quantity: 0
}
let unit4 = {
    name: 'unit4',
    cost: 10000,
    production: 100,
    quantity: 0
}
let shrimpProduction = unit1.production * unit1.quantity + unit2.production * unit2.quantity + unit3.production * unit3.quantity + unit4.production * unit4.quantity;
// checks for price and makes sure price is less than score
function purchase(unit) {
    let price = unit.cost;
    if(price <= numberClicks){
        numberClicks -= price;
        unit.quantity = unit.quantity + 1;
        unit.cost = Math.floor(unit.cost * 1.5);
        shrimpProduction += unit.production;
        document.getElementById('score').innerHTML = `Shrimps: ${Math.floor(numberClicks)}`;
        updateShrimpProductionInHTML();
        updateUnitCostInHTML(unit);
        if(unit.quantity === 1){
            setInterval(crustaceanWorking(unit), 1000)
        }
    }
}
function updateUnitCostInHTML(unit) {
    switch(unit) {
        case unit1:
            document.getElementById('unit1Cost').innerHTML = `Price: ${unit1.cost} Shrimps`;
            document.getElementById('unit1QuantityNumber').innerHTML = `${unit1.quantity}`;
            break;
        case unit2:
            document.getElementById('unit2Cost').innerHTML = `Price: ${unit2.cost} Shrimps`;
            document.getElementById('unit2QuantityNumber').innerHTML = `${unit2.quantity}`;
            break;
        case unit3:
            document.getElementById('unit3Cost').innerHTML = `Price: ${unit3.cost} Shrimps`;
            document.getElementById('unit3QuantityNumber').innerHTML = `${unit3.quantity}`;
            break;
        case unit4:
            document.getElementById('unit4Cost').innerHTML = `Price: ${unit4.cost} Shrimps`;
            document.getElementById('unit4QuantityNumber').innerHTML = `${unit4.quantity}`;
    }
}
function updateShrimpProductionInHTML() {
    document.getElementById('production').innerHTML = `Shrimps per second: ${shrimpProduction.toFixed(1)}`;
}
// clicking the button makes number go up.... shrimple as that
function clickButton(){
    numberClicks ++;
    document.getElementById('score').innerHTML = `Shrimps: ${Math.floor(numberClicks)}`;
}
function idleShrimpProduction() {
    let counter = 0;
    let target = numberClicks + shrimpProduction;
    let countSpeed = shrimpProduction / 10
    if(shrimpProduction >= 1){
        let i = setInterval(function(){
            numberClicks += countSpeed;
            document.getElementById('score').innerHTML = `Shrimps: ${Math.floor(numberClicks)}`;
            counter ++;
            if(counter === 10) {
                clearInterval(i);
            }
        }, 100)
    } else {
        numberClicks += shrimpProduction;
        document.getElementById('score').innerHTML = `Shrimps: ${Math.floor(numberClicks)}`;
    }
}
function shrimpClickFunction(){
    clickButton();
    shrimpAnimateForward();
    // shrimpAnimateBackward();
}
function shrimpAnimateForward(){
    document.getElementById('shrimp').style.transform = 'rotate(180deg)';
    document.getElementById('shrimp').style.transform = 'skew(10deg, 10deg)';
    document.getElementById('shrimp').style.transitionDuration = '10ms';
    document.getElementById('shrimp').style.height = '150px';
    document.getElementById('shrimp').style.width = '180px';
    
    
    setTimeout(shrimpAnimateBackward, 100);
}
function shrimpAnimateBackward(){
    document.getElementById('shrimp').style.transform = 'rotate(20deg)';
    document.getElementById('shrimp').style.transitionDuration = '100ms';
    document.getElementById('shrimp').style.height = '200px';
    document.getElementById('shrimp').style.width = '200px';
}
function crustaceanWorking(unit) {
    if(unit.quantity >= 1){
        let barWidth = 0;
        function progress() {
            if (barWidth >= 100){
                barWidth = 0;
            } else {
                barWidth ++;
                switch(unit) {
                    case unit1:
                        document.getElementById('unit1ProgressBarProgressing').style.width = barWidth + '%';
                        break;
                    case unit2:
                        document.getElementById('unit2ProgressBarProgressing').style.width = barWidth + '%';
                        break;
                    case unit3:
                        document.getElementById('unit3ProgressBarProgressing').style.width = barWidth + '%';
                        break;
                    case unit4:
                        document.getElementById('unit4ProgressBarProgressing').style.width = barWidth + '%';
                }
            }
        }
        setInterval(progress, 10);
    }
}
// function bakeCookies(){
//     document.cookie = "numberClicks=" + numberClicks + ";unit1Cost=" + unit1.cost +";unit1Quantity=" + unit1.quantity + ";unit2Cost=" + unit2.cost +";unit2Quantity=" + unit2.quantity + ";unit3Cost=" + unit3.cost + ";unit3Quantity=" + unit3.quantity + ";unit4Cost=" + unit4.cost + ";unit4Quantity=" + unit4.quantity + ";expires";
//     alert("Cookies Saved");
// }
// function loadCookies(){}
// setInterval(bakeCookies, 1000 * 60);
// setInterval(updateScore, 1000);
setInterval(idleShrimpProduction, 1000);