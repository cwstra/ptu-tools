const TYPES = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dark",
    "Dragon",
    "Steel",
    "Fairy"
]

const HABITATS = [
    "Arctic",
    "Beach",
    "Cave",
    "Desert",
    "Forest",
    "Freshwater",
    "Grassland",
    "Marsh",
    "Mountain",
    "Ocean",
    "Rainforest",
    "Taiga",
    "Tundra",
    "Urban"
]

const REGIONS = [
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Unova",
    "Kalos",
    "Alola",
    "Galar"
]

const NATURES = {
    "Cuddly": {
        "up": "hp",
        "down": "atk"
    },
    "Distracted": {
        "up": "hp",
        "down": "def"
    },
    "Proud": {
        "up": "hp",
        "down": "spatk"
    },
    "Decisive": {
        "up": "hp",
        "down": "spdef"
    },
    "Patient": {
        "up": "hp",
        "down": "spd"
    },
    "Desperate": {
        "up": "atk",
        "down": "hp"
    },
    "Lonely": {
        "up": "atk",
        "down": "def"
    },
    "Adamant": {
        "up": "atk",
        "down": "spatk"
    },
    "Naughty": {
        "up": "atk",
        "down": "spdef"
    },
    "Brave": {
        "up": "atk",
        "down": "spd"
    },
    "Stark": {
        "up": "def",
        "down": "hp"
    },
    "Bold": {
        "up": "def",
        "down": "atk"
    },
    "Impish": {
        "up": "def",
        "down": "spatk"
    },
    "Lax": {
        "up": "def",
        "down": "spdef"
    },
    "Relaxed": {
        "up": "def",
        "down": "spd"
    },
    "Curious": {
        "up": "spatk",
        "down": "hp"
    },
    "Modest": {
        "up": "spatk",
        "down": "atk"
    },
    "Mild": {
        "up": "spatk",
        "down": "def"
    },
    "Rash": {
        "up": "spatk",
        "down": "spdef"
    },
    "Quiet": {
        "up": "spatk",
        "down": "spd"
    },
    "Dreamy": {
        "up": "spdef",
        "down": "hp"
    },
    "Calm": {
        "up": "spdef",
        "down": "atk"
    },
    "Gentle": {
        "up": "spdef",
        "down": "def"
    },
    "Careful": {
        "up": "spdef",
        "down": "spatk"
    },
    "Sassy": {
        "up": "spdef",
        "down": "spd"
    },
    "Skittish": {
        "up": "spd",
        "down": "hp"
    },
    "Timid": {
        "up": "spd",
        "down": "atk"
    },
    "Hasty": {
        "up": "spd",
        "down": "def"
    },
    "Jolly": {
        "up": "spd",
        "down": "spatk"
    },
    "Naive": {
        "up": "spd",
        "down": "spdef"
    },
    "Composed": {
        "up": "hp",
        "down": "hp"
    },
    "Hardy": {
        "up": "atk",
        "down": "atk"
    },
    "Docile": {
        "up": "def",
        "down": "def"
    },
    "Bashful": {
        "up": "spatk",
        "down": "spatk"
    },
    "Quirky": {
        "up": "spdef",
        "down": "spdef"
    },
    "Serious": {
        "up": "spd",
        "down": "spd"
    }
}

const DB = {
    1: {
        diceCount: 1,
        dice: 6,
        modifier: 1
    },
    2: {
        diceCount: 1,
        dice: 6,
        modifier: 3
    },
    3: {
        diceCount: 1,
        dice: 6,
        modifier: 5
    },
    4: {
        diceCount: 1,
        dice: 8,
        modifier: 6
    },
    5: {
        diceCount: 1,
        dice: 8,
        modifier: 8
    },
    6: {
        diceCount: 2,
        dice: 6,
        modifier: 8
    },
    7: {
        diceCount: 2,
        dice: 6,
        modifier: 10
    },
    8: {
        diceCount: 2,
        dice: 8,
        modifier: 10
    },
    9: {
        diceCount: 2,
        dice: 10,
        modifier: 10
    },
    10: {
        diceCount: 3,
        dice: 8,
        modifier: 10
    },
    11: {
        diceCount: 3,
        dice: 10,
        modifier: 10
    },
    12: {
        diceCount: 3,
        dice: 12,
        modifier: 10
    },
    13: {
        diceCount: 4,
        dice: 10,
        modifier: 10
    },
    14: {
        diceCount: 4,
        dice: 10,
        modifier: 15
    },
    15: {
        diceCount: 4,
        dice: 10,
        modifier: 20
    },
    16: {
        diceCount: 5,
        dice: 10,
        modifier: 20
    },
    17: {
        diceCount: 5,
        dice: 12,
        modifier: 25
    },
    18: {
        diceCount: 6,
        dice: 12,
        modifier: 25
    },
    19: {
        diceCount: 6,
        dice: 12,
        modifier: 30
    },
    20: {
        diceCount: 6,
        dice: 12,
        modifier: 35
    },
    21: {
        diceCount: 6,
        dice: 12,
        modifier: 40
    },
    22: {
        diceCount: 6,
        dice: 12,
        modifier: 45
    },
    23: {
        diceCount: 6,
        dice: 12,
        modifier: 50
    },
    24: {
        diceCount: 6,
        dice: 12,
        modifier: 55
    },
    25: {
        diceCount: 6,
        dice: 12,
        modifier: 60
    },
    26: {
        diceCount: 7,
        dice: 12,
        modifier: 65
    },
    27: {
        diceCount: 8,
        dice: 12,
        modifier: 70
    },
    28: {
        diceCount: 8,
        dice: 12,
        modifier: 80
    },
}


//
// INITIALIZE WIDGETS
//

function initializeWidgets() {
    $('.collapse').collapse()
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-subscribe]').each(loadSubscriber)
}

$(document).ready(function() {
    $(window).keydown(function(event){
        if(event.keyCode === 13) {
            event.preventDefault();
            return false;
        }
    });
});



//
// UPDATE SUBSCRIBED FIELDS
//

function loadSubscriber() {
    let elem = $(this)
    subscribe(this, elem.attr("data-subscribe").split(','), window[elem.attr("data-subscribe-callback")])
}

function subscribe(elem, targetIds, callback) {
    targetIds.forEach(targetId => $('#' + targetId).change(function () {callback(elem); $(elem).change();}))
    callback(elem)
    $(elem).change();
}

// Sum Subscriber Callback
function buildValueFromSubscribedFields(elem) {
    elem = $(elem)
    var formula = elem.attr("data-formula")
    var i = 0

    elem.attr("data-subscribe").split(',').forEach(targetId => {
        let value = parseInt($('#' + targetId).val())
        if (isNaN(value)) {
            value = 0
        }
        formula = formula.replace("#" + i, value)
        i++
    })

    elem.val(eval(formula))
}

//
// Common Validators
//

function validateTypes(types, errorMessage) {
    var isValid = true
    types.forEach( type => {
        if (!TYPES.includes(type)) {
            if (errorMessage != null) {
                alert(errorMessage + type)
            }
            isValid = false
        }
    })
    return isValid
}

//
// Other Utilities
//

function getCsModifier(cs) {
    if (cs === 0) {
        return 1
    } else if (cs > 0) {
        return 1 + (0.2 * cs)
    } else {
        return 1 + (0.1 * cs)
    }
}

function clipboardText(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function buildToast(message) {
    let toast = $('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000">\n' +
        '  <div class="toast-body p-2 rounded bg-danger">\n' +
        '    '+ message +'\n' +
        '    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\n' +
        '      <span aria-hidden="true">&times;</span>\n' +
        '    </button>\n' +
        '  </div>\n' +
        '</div>')

    $(".toast-container").append(toast)
    toast.toast('show')
}