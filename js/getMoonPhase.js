/* 
 * modified from http://www.voidware.com/moon_phase.htm 
 */

function getMoonPhase(dt)
{

    var year = new Date(dt).getFullYear();
    var month = new Date(dt).getMonth() + 1;
    var day = new Date(dt).getDate();

    var c = e = jd = b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    c = 365.25 * year;

    e = 30.6 * month;

    jd = c + e + day - 694039.09; //jd is total days elapsed

    jd /= 29.5305882; //divide by the moon cycle

    b = parseInt(jd); //int(jd) -> b, take integer part of jd

    jd -= b; //subtract integer part to leave fractional part of original jd

    b = Math.round(jd * 8); //scale fraction from 0-8 and round

    if (b >= 8 ) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon

    if(b == 0)
        return "New Moon";
    else if(b == 1)
        return "Waxing Crescent";
    else if(b == 2)
        return "Quarter Moon";
    else if(b == 3)
        return "Waxing Gibbous";
    else if(b == 4)
        return "Full Moon";
    else if(b == 5)
        return "Waning Gibbous";
    else if(b == 6)
        return "Last Quarter";
    else if(b == 7)
        return "Waning Crescent";
    
    return -1;
}