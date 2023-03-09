function percentageOfWorld1(population) {
    return population / 7900 * 100;
}
var describePopulation = function (country, population) {
    var percent = percentageOfWorld1(population)
    var text = `${country},has ${population} million people,which is about ${percent}% of the world`
    console.log(text)
}

describePopulation("Viet Nam", 99)
describePopulation("American", 336)
describePopulation("china", 1441)