
// KilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

// budgetCalculator
function budgetCalculator(gori, mobile, laptop) {
    var gor = gori * 50;
    var mob = mobile * 100;
    var lap = laptop * 500;
    var total = gor + mob + lap;
    return total;
}

// hotelCost
function hotelCost(day) {
    var total = 0;
    if (day <= 10) {
        total = day * 100;

    }
    else if (day <= 20) {
        var fast10day = 10 * 100;
        var remain = day - 10;
        var secoun10day = remain * 80;
        total = fast10day + secoun10day;
    }
    else {
        var fast10day = 10 * 100;
        var secoun10day = 10 * 80;
        var remain = day - 20;
        var third10day = remain * 50;
        total = fast10day + secoun10day + third10day;
    }
    return total
}


// megaFriend
function megaFriend(friends) {
    var max = 0;
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i].length;
        if (element > max) {
            max = element;
        }
    }
    return max;
}
