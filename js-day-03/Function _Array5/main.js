var neighbours = ["lao", "thailand", "campuchia"]
neighbours.push("Utopia")
console.log(neighbours)
neighbours.pop()
console.log(neighbours)

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country")
}

neighbours[neighbours.indexOf("lao")] = "Republic of Sweden";
console.log(neighbours)
