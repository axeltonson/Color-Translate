document.querySelector('input').focus();
document.querySelector('#convert_button').addEventListener('click', check)

var error = false;
var index = 0;
function check() {
    var inputLength = document.querySelector('input').value.length;
    check_length(inputLength);
    if (error === false) {
        converter();
    }
    else {
        document.querySelector('input').focus();
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

function converter() {
    var fullHColor = document.querySelector('input').value;
    var red = convert_hex_to_dec(fullHColor.slice(0, 2));
    var green = convert_hex_to_dec(fullHColor.slice(2, 4));
    var blue = convert_hex_to_dec(fullHColor.slice(4, 6));
    print_it(red, green, blue);
}

function convert_hex_to_dec(color) {
    color = parseInt(color, 16);
    return color;
}

function print_it(red, green, blue) {
    var flux = '<div class="color' + index + ' form">' +
        'rgb(' + red + ',' + green + ',' + blue + ')' +
        '</div>';
    document.querySelector('section').innerHTML += flux;
    document.querySelector('.color' + index).style.background = 'rgb(' + red + ',' + green + ',' + blue + ')';
    index++;
}

// TODO : - faire les vérification sur le champ de formulaire
// TODO : - faire le bouton reset
// TODO : - possibilité de faire dec to hex
// TODO : - système de carte pour sauver les couleurs précédemment convertis
// TODO : - possibilité de copier les couleurs dans le presse papier