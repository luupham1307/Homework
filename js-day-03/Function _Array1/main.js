function describeCountry(country, population, capitalCity) {
    return `${country},has ${population} million people and its capital city is ${capitalCity}`
}
var countryVietNam = describeCountry("Viet Nam", 99, "Ha Noi")
var countryAmerica = describeCountry("American", 336, "Washington")
var countryFinland = describeCountry("Finland", 6, "Helsink")

console.log(countryVietNam)
console.log(countryAmerica)
console.log(countryFinland)

