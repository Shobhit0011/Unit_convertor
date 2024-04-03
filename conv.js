// Select input field
const input = document.querySelector("#input");

// Select unit selections
const unit = document.querySelector("#unit");

const convert = () => {

    // Get value of user input and units
    const value = input.value;
    const unitValue = unit.value;
    const output = document.querySelector("#output");

    // Show output when there is a value
    (value !== "") ? 
      output.style.display = "block" : output.style.display = "none";

    // check unit type
    switch(unitValue) {
        case "lbs":
            convertLbs(value);
            break;
        case "grams":
            convertGrams(value);
            break;
        case "kilograms":
            convertKilograms(value);
            break;
        case "ounces":
            convertOunces(value);
            break;
        case "meters":
            convertMeters(value);
            break;
        case "miles":
            convertMiles(value);
            break;
        case "inches":
            convertInches(value);
            break;
        case "foots" :
            convertFoots(value);
            break;
    }
}  

const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");

const convertLbs = value => {
    card1.querySelector('h4').textContent="Grams:"
    card2.querySelector('h4').textContent="Kilograms:"
    card3.querySelector('h4').textContent="Ounces:"

    card1.querySelector('div').textContent= value * 453.592
    card2.querySelector('div').textContent= value * 453.592 / 1000
    card3.querySelector('div').textContent= value * 16
}

const convertGrams = value => {
    card1.querySelector('h4').textContent="kilograms:"
    card2.querySelector('h4').textContent="Ounces:"
    card3.querySelector('h4').textContent="Lbs:"

    card1.querySelector('div').textContent= value / 1000;
    card2.querySelector('div').textContent= value * 0.035274;
    card3.querySelector('div').textContent= value * 0.00220462;
}
const convertKilograms = value => {
    card1.querySelector('h4').textContent="Grams:"
    card2.querySelector('h4').textContent="Ounces:"
    card3.querySelector('h4').textContent="Lbs:"

    card1.querySelector('div').textContent= value * 1000;
    card2.querySelector('div').textContent= value * 35.2739619;
    card3.querySelector('div').textContent= value * 2.20462442;
}
const convertOunces = value => {
    card1.querySelector('h4').textContent="kilograms:"
    card2.querySelector('h4').textContent="Grams:"
    card3.querySelector('h4').textContent="Lbs:"

    card1.querySelector('div').textContent= value * 0.0283495231;
    card2.querySelector('div').textContent= value * 28.3495231;
    card3.querySelector('div').textContent= value * 0.0625;
}
const convertMeters = value => {
    card1.querySelector('h4').textContent="Miles:"
    card2.querySelector('h4').textContent="Inches:"
    card3.querySelector('h4').textContent="Foots:"

    card1.querySelector('div').textContent= value * 0.000621371192;
    card2.querySelector('div').textContent= value * 39.3700787;
    card2.querySelector('div').textContent= value * 3.2808399;
}
const convertFoots = value => {
    card1.querySelector('h4').textContent="Miles:"
    card2.querySelector('h4').textContent="Inches:"
    card3.querySelector('h4').textContent="Meters:"

    card1.querySelector('div').textContent= value * 0.000189393939;
    card2.querySelector('div').textContent= value * 12;
    card2.querySelector('div').textContent= value * 0.3048;
}
const convertMiles = value => {
    card1.querySelector('h4').textContent="Foots:"
    card2.querySelector('h4').textContent="Inches:"
    card3.querySelector('h4').textContent="Meters:"

    card1.querySelector('div').textContent= value * 5280;
    card2.querySelector('div').textContent= value * 63360;
    card2.querySelector('div').textContent= value * 1609.344;
}
const convertInches = value => {
    card1.querySelector('h4').textContent="Miles:"
    card2.querySelector('h4').textContent="Meters:"
    card3.querySelector('h4').textContent="Foots:"

    card1.querySelector('div').textContent= value * 1.57828283e-5;
    card2.querySelector('div').textContent= value * 0.0254;
    card2.querySelector('div').textContent= value * 0.08333333;
}

// Catch user input event and unit change
input.addEventListener("input", convert);
unit.addEventListener("input", convert);
