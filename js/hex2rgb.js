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
    var inputValue = document.querySelector('input').value;
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
    for (var i = 0; i < value.length; i++) {
        var result = /[0-9a-f]/.test(value[i]);
        result === true ? error = false : error = true;
    }
    if (error) {
        document.querySelector('p').innerHTML = 'Wrong color code ! Only A to F and 0 to 9 charachters are valid. ex: ffe512';
    }
    else {
        document.querySelector('p').innerHTML = '';
    }
}

// CONVERSION FUNCTIONS
var index = 0;

function converter() {
    var fullHColor = document.querySelector('input').value.toUpperCase();
    var red = convert_hex_to_dec(fullHColor.slice(0, 2));
    var green = convert_hex_to_dec(fullHColor.slice(2, 4));
    var blue = convert_hex_to_dec(fullHColor.slice(4, 6));
    print_it(red, green, blue);
}

function convert_hex_to_dec(color) {
    color = parseInt(color, 16);
    return color;
}

// DISPLAY FUNCTION
function print_it(red, green, blue) {
    var flux = '<div class="color' + index + ' form">' +
        'rgb(' + red + ',' + green + ',' + blue + ')' +
        '</div>';
    document.querySelector('section').innerHTML += flux;
    document.querySelector('.color' + index).style.background = 'rgb(' + red + ',' + green + ',' + blue + ')';
    index++;
}

// RESET FUNCTION
function reset() {
    document.querySelector('input').value = '';
    document.querySelector('section').innerHTML = '';
    document.querySelector('p').innerHTML = '';
    input_focus();
}

// TODO : - possibilité de faire dec to hex
// TODO : - système de carte pour sauver les couleurs précédemment convertis
// TODO : - possibilité de copier les couleurs dans le presse papier