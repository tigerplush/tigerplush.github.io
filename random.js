let race = {};
let personality = {};
let gender = {};
let phrase = {};
let song = {};
let birthday = {};
let birthsign = {};

function Init()
{
    race = document.getElementById("race");
    personality = document.getElementById("personality");
    gender = document.getElementById("gender");
    phrase = document.getElementById("phrase");
    song = document.getElementById("song");
    birthday = document.getElementById("birthday");
    birthsign = document.getElementById("birthsign");

    CreateRandomVillager();
}

function CreateRandomVillager()
{
    const raceId = Math.floor(Math.random() * races.length);
    race.innerHTML = races[raceId];

    const personalityId = Math.floor(Math.random() * personalities.length);
    personality.innerHTML = personalities[personalityId];

    const genderId = Math.floor(Math.random() * genders.length);
    gender.innerHTML = genders[genderId];

    const phraseId = Math.floor(Math.random() * phrases.length);
    phrase.innerHTML = phrases[phraseId];

    const songId = Math.floor(Math.random() * songs.length);
    song.innerHTML = songs[songId];

    const month = Math.floor(Math.random() * 11);
    const day = Math.floor(Math.random() * 31);

    const date = new Date();
    date.setMonth(month);
    date.setDate(day);
    const options = { month: 'long', day: 'numeric' };
    birthday.innerHTML = date.toLocaleDateString(undefined, options);

    const sign = GetBirthsign(date.getMonth(), date.getDate());
    birthsign.innerHTML = sign;
}

function GetBirthsign(month, day)
{
    let sign = "";
    switch(month)
    {
        //January
        case 0:
            sign = ByDay(day, 20, "Capricorn", "Aquarius");
            break;
        //February
        case 1:
            sign = ByDay(day, 19, "Aquarius", "Pisces");
            break;
        //March
        case 2:
            sign = ByDay(day, 20, "Pisces", "Aries");
            break;
        //April
        case 3:
            sign = ByDay(day, 20, "Aries", "Taurus");
            break;
        //May
        case 4:
            sign = ByDay(day, 20, "Taurus", "Gemini");
            break;
        //June
        case 5:
            sign = ByDay(day, 21, "Gemini", "Cancer");
            break;
        //July
        case 6:
            sign = ByDay(day, 22, "Cancer", "Leo");
            break;
        //August
        case 7:
            sign = ByDay(day, 23, "Leo", "Virgo");
            break;
        //September
        case 8:
            sign = ByDay(day, 21, "Virgo", "Libra");
            break;
        //October
        case 9:
            sign = ByDay(day, 22, "Libra", "Scorpio");
            break;
        //November
        case 10:
            sign = ByDay(day, 21, "Scorpio", "Sagittarius");
            break;
        //December
        case 11:
            sign = ByDay(day, 21, "Sagittarius", "Capricorn");
            break;
    }
    return sign;
}

function ByDay(day, separationDay, signBefore, signAfter)
{
    if(day <= separationDay)
    {
        return signBefore;
    }
    return signAfter;
}