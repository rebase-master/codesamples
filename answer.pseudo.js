//Returns name with a random number between min and max
function generator(name, min, max){

    name = name || 'Mansoor';
    min = min || 6;
    max = max || 15;

    //generate a random number between max and min, both exclusive
    var rndNumber = Math.ceil(Math.random() * (max - min - 1)) + min;

    //concatenate name with random number and return it
    return name.concat(" ", rndNumber);
}

console.log(generator());