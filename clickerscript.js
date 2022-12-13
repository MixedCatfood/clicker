let numberClicks = 0;
//unit1 is jumbo shrimp
let unit1 = {
    name: 'Jumbo Shrimp',
    cost: 10,
    production: .1,
    quantity: 0
};
//unit2 is crab
let unit2 = {
    name: 'Crab',
    cost: 100,
    production: 1,
    quantity: 0
};
//unit3 is lobster
let unit3 = {
    name: 'Lobster',
    cost: 1000,
    production: 10,
    quantity: 0
};
//unit4 is isopod
let unit4 = {
    name: 'Isopod',
    cost: 10000,
    production: 50,
    quantity: 0
};

let shrimpProduction = 
(unit1.production * unit1.quantity) + 
(unit2.production * unit2.quantity) + 
(unit3.production * unit3.quantity) + 
(unit4.production * unit4.quantity);

// checks for price and makes sure price is less than score
function purchase(unit) {
    let price = unit.cost;
    if(price <= numberClicks){
        numberClicks -= price;
        unit.quantity = unit.quantity + 1;
        unit.cost = Math.floor(unit.cost * 1.25);
        shrimpProduction += unit.production;
        document.getElementById('score').innerHTML = `Shrimps: ${Math.floor(numberClicks)}`;
        updateShrimpProductionInHTML();
        updateUnitCostInHTML(unit);
        setInterval(crustaceanWorking(unit), 1000);
        
    }
};

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
};

function updateShrimpProductionInHTML() {
    document.getElementById('production').innerHTML = `Shrimps per second: ${shrimpProduction.toFixed(1)}`;
};

// clicking the button makes number go up.... shrimple as that
function clickButton(){
    numberClicks ++;
    document.getElementById('score').innerHTML = `Shrimps: ${Math.floor(numberClicks)}`;
};

function idleShrimpProduction() {
    let counter = 0;
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
};

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
                switch(unit) {
                    case unit1:
                        barWidth += .1;
                        document.getElementById('unit1ProgressBarProgressing').style.width = barWidth + '%';
                        break;
                    case unit2:
                        barWidth ++;
                        document.getElementById('unit2ProgressBarProgressing').style.width = barWidth + '%';
                        break;
                    case unit3:
                        barWidth ++;
                        document.getElementById('unit3ProgressBarProgressing').style.width = barWidth + '%';
                        break;
                    case unit4:
                        barWidth ++;
                        document.getElementById('unit4ProgressBarProgressing').style.width = barWidth + '%';
                }
            }
        }
        setInterval(progress, 10);
    }
}

function saveGame(){
    localStorage.setItem("score", `${numberClicks}`);

    localStorage.setItem("unit1Cost", `${unit1.cost}`);
    localStorage.setItem("unit1Production", unit1.production);
    localStorage.setItem("unit1Quantity", unit1.quantity);

    localStorage.setItem("unit2Cost", `${unit2.cost}`);
    localStorage.setItem("unit2Production", unit2.production);
    localStorage.setItem("unit2Quantity", unit2.quantity);

    localStorage.setItem("unit3Cost", unit3.cost);
    localStorage.setItem("unit3Production", unit3.production);
    localStorage.setItem("unit3Quantity", unit3.quantity);

    localStorage.setItem("unit4Cost", unit4.cost);
    localStorage.setItem("unit4Production", unit4.production);
    localStorage.setItem("unit4Quantity", unit4.quantity);
};

function loadGame(){
    numberClicks = parseInt(localStorage.getItem("score"));

    let unit1Cost = parseInt(localStorage.getItem("unit1Cost"));
    unit1.cost = unit1Cost;
    let unit1Production = parseInt(localStorage.getItem("unit1Production"));
    unit1.production = unit1Production;
    let unit1Quantity = parseInt(localStorage.getItem("unit1Quantity"));
    unit1.quantity = unit1Quantity;

    unit2.cost = parseInt(localStorage.getItem("unit2Cost"));
    unit2.production = parseInt(localStorage.getItem("unit2Production"));
    unit2.quantity = parseInt(localStorage.getItem("unit2Quantity"));

    unit3.cost = parseInt(localStorage.getItem("unit3Cost"));
    unit3.production = parseInt(localStorage.getItem("unit3Production"));
    unit3.quantity = parseInt(localStorage.getItem("unit3Quantity"));

    unit4.cost = parseInt(localStorage.getItem("unit4Cost"));
    unit4.production = parseInt(localStorage.getItem("unit4Production"));
    unit4.quantity = parseInt(localStorage.getItem("unit4Quantity"));

    updateUnitCostInHTML(unit1);
    updateUnitCostInHTML(unit2);
    updateUnitCostInHTML(unit3);
    updateUnitCostInHTML(unit4);
    document.getElementById('score').innerHTML = `Shrimps: ${Math.floor(numberClicks)}`;
    updateShrimpProductionInHTML();
};
// loadGame();
setInterval(saveGame, 1000 * 30);
setInterval(idleShrimpProduction, 1000);