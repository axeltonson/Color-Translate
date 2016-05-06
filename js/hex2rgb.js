input_focus();

document.querySelector('#convert_button').addEventListener('click', check);
document.querySelector('#reset_button').addEventListener('click', reset);

// FOCUS FUNCTION
function input_focus() {
    document.querySelector('input').focus();
}

// CHECKING DATA ENTRY FUNCTIONS
var error = false;

function check() {
    var inputValue = document.querySelector('input').value.toLowerCase();
    var inputLength = inputValue.length;
    check_length(inputLength);
    check_char(inputValue);
    if (error) {
        input_focus();
    }
    else {
        converter();
    }
}

function check_length(length) {
    if (length !== 6) {
        document.querySelector('p').innerHTML = '6 characters needed ! ex: ffe512';
        error = true;
    }
    else {
        document.querySelector('p').innerHTML = '';
        error = false;
    }
}

function check_char(value) {
    var countError = 0;
    for (var i = 0; i < value.length; i++) {
        var result = /[0-9a-f]/.test(value[i]);
        result === false ? countError++ : countError += 0;
    }
    if (countError != 0) {
        document.querySelector('p').innerHTML = 'Wrong color code ! Only A to F and 0 to 9 characters are valid. ex: ffe512';
    }
    else {
        document.querySelector('p').innerHTML = '';
    }
}

// CONVERSION FUNCTIONS
function converter() {
    var fullHColor = document.querySelector('input').value;
    var red = convert_hex_to_dec(fullHColor.slice(0, 2));
    var green = convert_hex_to_dec(fullHColor.slice(2, 4));
    var blue = convert_hex_to_dec(fullHColor.slice(4, 6));
    print_dec(red, green, blue);
    print_hex(fullHColor);
    print_comp_color(get_comp_color(red, green, blue));
}

function convert_hex_to_dec(color) {
    color = parseInt(color, 16);
    return color;
}

function get_comp_color(red, green, blue) {
    var redComp = 255 - red;
    var greenComp = 255 - green;
    var blueComp = 255 - blue;
    var compColor = 'rgb(' + redComp + ',' + greenComp + ',' + blueComp + ')';
    return compColor;
}

// DISPLAY FUNCTION
var index = 0
var rgbButton = '<button class="select' + index + '">copy RGB</button>';
function print_dec(red, green, blue) {
    var flux = '<div class="color' + index + ' form">' +
        '<p>rgb(' + red + ',' + green + ',' + blue + ')</p>' +
        rgbButton +
        '</div>';
    document.querySelector('section').innerHTML += flux;
    document.querySelector('.color' + index).style.background = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function print_hex(hex_code) {
    var hexButton = '<button class="select' + index + '">copy HEX</button>';
    var flux = '<p>' +
        '#' + hex_code +
        '</p>' +
        hexButton;
    document.querySelector('.color' + index).innerHTML += flux;
}

function print_comp_color(comp_color) {
    var flux = '<p style="width:100%;background:'+comp_color+'">complementary color</p>';
    document.querySelector('.color' + index).innerHTML += flux;
    index++;
}

// RESET FUNCTION
function reset() {
    document.querySelector('input').value = '';
    document.querySelector('section').innerHTML = '';
    document.querySelector('p').innerHTML = '';
    input_focus();
}