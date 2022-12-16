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

let unit11Element = "unit1Upgrade1";
let unit12Element = "unit1Upgrade2";
let unit13Element = "unit1Upgrade3";
let unit14Element = "unit1Upgrade4";
let unit15Element = "unit1Upgrade5";
let unit21Element = "unit2Upgrade1";
let unit22Element = "unit2Upgrade2";
let unit23Element = "unit2Upgrade3";
let unit24Element = "unit2Upgrade4";
let unit25Element = "unit2Upgrade5";
let unit31Element = "unit3Upgrade1";
let unit32Element = "unit3Upgrade2";
let unit33Element = "unit3Upgrade3";
let unit34Element = "unit3Upgrade4";
let unit35Element = "unit3Upgrade5";
let unit41Element = "unit4Upgrade1";
let unit42Element = "unit4Upgrade2";
let unit43Element = "unit4Upgrade3";
let unit44Element = "unit4Upgrade4";
let unit45Element = "unit4Upgrade5";

let upgrades = {
    // click1: {
    //     purchased: false,
    //     production: 2
    // },
    // click2: {
    //     purchased: false,
    //     production: 2
    // },
    // click2: {
    //     purchased: false,
    //     production: 2
    // },
    // click3: {
    //     purchased: false,
    //     production: 2
    // },
    // click4: {
    //     purchased: false,
    //     production: 2
    // },
    // click5: {
    //     purchased: false,
    //     production: 2
    // },
    unit11: {
        purchased: false,
        production: 2,
        cost: 2
    },
    unit12: {
        purchased: false,
        production: 2,
        cost: 2
    },
    unit13: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit14: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit15: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit21: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit22: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit23: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit24: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit25: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit31: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit32: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit33: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit34: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit35: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit41: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit42: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit43: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit44: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit45: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit51: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit52: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit53: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit54: {
        purchased: false,
        production: 2,
        cost: 2,
    },
    unit55: {
        purchased: false,
        production: 2,
        cost: 2,
    },
}

let shrimpProduction = 
(unit1.production * unit1.quantity) + 
(unit2.production * unit2.quantity) + 
(unit3.production * unit3.quantity) + 
(unit4.production * unit4.quantity);

// checks for price and makes sure price is less than score
function purchase(unit) {
    let price = unit.cost;
    if(price <= numberClicks) {
        numberClicks -= price;
        unit.quantity = unit.quantity + 1;
        unit.cost = Math.floor(unit.cost * 1.25);
        shrimpProduction += unit.production;
        document.getElementById('score').innerHTML = `Shrimps: ${Math.floor(numberClicks)}`;
        updateShrimpProductionInHTML();
        updateUnitCostInHTML(unit);
        setInterval(crustaceanWorking(unit), 1000);
    };
};

function purchaseUpgrade(upgrade, unit, string) {
    if(upgrade.cost <= numberClicks && upgrade.purchased == false) {
        upgrade.purchased = true;
        numberClicks -= upgrade.cost;
        unit.production *= upgrade.production;
        shrimpProduction = 
        (unit1.production * unit1.quantity) + 
        (unit2.production * unit2.quantity) + 
        (unit3.production * unit3.quantity) + 
        (unit4.production * unit4.quantity);
        updateShrimpProductionInHTML();
        document.getElementById(string).style.display = 'none';
    };
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
    };
};

function updateShrimpProductionInHTML() {
    document.getElementById('production').innerHTML = `Shrimps per second: ${shrimpProduction.toFixed(1)}`;
};

// clicking the button makes number go up.... shrimple as that
function clickButton() {
    numberClicks ++;
    document.getElementById('score').innerHTML = `Shrimps: ${Math.floor(numberClicks)}`;
};

function idleShrimpProduction() {
    let counter = 0;
    let countSpeed = shrimpProduction / 10
    if(shrimpProduction >= 1){
        let i = setInterval(function() {
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

function shrimpClickFunction() {
    clickButton();
    shrimpAnimateForward();
};

function shrimpAnimateForward() {
    document.getElementById('shrimp').style.transform = 'rotate(180deg)';
    document.getElementById('shrimp').style.transform = 'skew(10deg, 10deg)';
    document.getElementById('shrimp').style.transitionDuration = '10ms';
    document.getElementById('shrimp').style.height = '150px';
    document.getElementById('shrimp').style.width = '180px';
    
    
    setTimeout(shrimpAnimateBackward, 100);
};

function shrimpAnimateBackward() {
    document.getElementById('shrimp').style.transform = 'rotate(20deg)';
    document.getElementById('shrimp').style.transitionDuration = '100ms';
    document.getElementById('shrimp').style.height = '200px';
    document.getElementById('shrimp').style.width = '200px';
};

function crustaceanWorking(unit) {
    if(unit.quantity >= 1){
        let barWidth = 0;
        function progress() {
            if (barWidth >= 100) {
                barWidth = 0;
            } else {
                switch(unit) {
                    case unit1:
                        barWidth += .155;
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

function saveGame() {
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
    localStorage.setItem("upgrades", JSON.stringify(upgrades));
    console.log('game saved');
};

const getStorage = (name, initial) => {
    let ret = parseInt(localStorage?.getItem(name)) || initial
    // console.log(name, ret);
    return ret;
}

function loadGame() {
        numberClicks = getStorage("score", numberClicks);

        unit1.cost = getStorage("unit1Cost", unit1.cost);
        unit1.production = getStorage("unit1Production", unit1.production);
        unit1.quantity = getStorage("unit1Quantity", unit1.quantity);

        unit2.cost = getStorage("unit2Cost", unit2.cost);
        unit2.production = getStorage("unit2Cost", unit2.production);
        unit2.quantity = getStorage("unit2Quantity", unit2.quantity);

        unit3.cost = getStorage("unit3Cost", unit3.cost);
        unit3.production = getStorage("unit3Production", unit3.production);
        unit3.quantity = getStorage("unit3Quantity", unit3.quantity);

        unit4.cost = getStorage("unit4Cost", unit4.cost);
        unit4.production = getStorage("unit4Production", unit4.production);
        unit4.quantity = getStorage("unit4Quantity", unit4.quantity);

        if(JSON.parse(localStorage.getItem("upgrades")) !== null) {
            upgrades = JSON.parse(localStorage.getItem("upgrades"));
        };

        shrimpProduction += 
        (unit1.production * unit1.quantity) + 
        (unit2.production * unit2.quantity) + 
        (unit3.production * unit3.quantity) + 
        (unit4.production * unit4.quantity);
        updateUnitCostInHTML(unit1);
        updateUnitCostInHTML(unit2);
        updateUnitCostInHTML(unit3);
        updateUnitCostInHTML(unit4);
        document.getElementById('score').innerHTML = `Shrimps: ${Math.floor(numberClicks)}`;
        updateShrimpProductionInHTML();
        crustaceanWorking(unit1);
        crustaceanWorking(unit2);
        crustaceanWorking(unit3);
        crustaceanWorking(unit4);
    // }
};
// loadGame();
// setInterval(saveGame, 1000 * 10);
setInterval(idleShrimpProduction, 1000);