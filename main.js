
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify


    // For..of loop that iterates through each object in the flowers array and pushes it to the filteredFlowers array if object.price is less than (<) 2.00
    for (const object of flowers) {
        if (object.price < 2.00) {
            filteredFlowers.push(object);
        }
    }


    return filteredFlowers  // Do not modify

}

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify


    // For..of loop that iterates through each objects, and pushes flowers that grow (.includes()) in USADA zones of 3 && 8 to filteredFlowers
    for (const object of flowers) {
        if (object.usdaZones.includes(3) && object.usdaZones.includes(8)) {
            filteredFlowers.push(object);
        }
    }



    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify



    // Same as zoneFlowers function, but pushes only flowers that are Orange
    for (const object of flowers) {
        if (object.colors.includes("Orange")) {
            filteredFlowers.push(object);
        }
    }




    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify
    let flowerHTMLArray = [];
    /*  
        Steps to take:
        -First, create a for loop that iterates through each object. The code should be nested inside.
        -Start with <article></article>
        -Between those, add \n    <h1>${object.type}</h1>\n
        -Next, add \n    <h2>Colors</h2>\n    <section> with a .join() method on the object's colors array to ensure automation in the case of multiple colors 
        -The .join() method should include </section><section> and proper indentation with \n. Close with </section>
        -Utilize similar methods to the first two parts, but with <h2>USDA Zones</h2> and <div> for each zone underneath
        -Should end up with a fairly long console.log() method that represents exactly what the above comment shows.
    */
for (const object of flowers) {
        flowerHTMLArray.push(`<article>\n    <h1>${object.type}</h1>\n\n    <h2>Colors</h2>\n    <section>${object.colors.join("</section>\n    <section>")}</section>\n\n    <h2>USDA Zones</h2>\n    <div>${object.usdaZones.join("</div>\n    <div>")}</div>\n</article>`);
    }
    // Originally Used a console.log which worked, but didn't pass the test. Had to read the initial code again.

    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */
    flowersHTMLString = flowerHTMLArray.join("\n");
    return flowersHTMLString  // Do not modify
}
//Why do I keep trying to use for.. in??














































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

