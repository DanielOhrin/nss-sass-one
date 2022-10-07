console.clear()

const { getFlowers, inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML } = require("./main.js")


const cheap = inexpensiveFlowers()
let success = true

if (!Array.isArray(cheap)) {
    console.log(`\x1b[91m
*************************
****   TEST FAILED   ****
*************************`)
console.log(`\x1b[93m
The inexpensiveFlowers function did not return an array.
Did you modify code that you should not have?
`)

    success = false
}




if (success && cheap.length !== 6) {
    console.log(`\x1b[91m
*************************
****   TEST FAILED   ****
*************************`)
console.log(`\x1b[93m
The test code expected that 6 flowers should be
be the array of inexpensive flowers.

There were ${cheap.length} items in the array.

Make sure that you have an \`if\` condition that
is checking the price property of each flower, and
that only flowers whose price is < 2.00 are being
added.
`)

    success = false
}

if (success && cheap.length > 0 && Object.prototype.toString.call(cheap[0]) !== "[object Object]") {
    console.log(`\x1b[91m
*************************
****   TEST FAILED   ****
*************************`)
console.log(`\x1b[93m
The test code expected that the array of inexpensive
flowers should contain objects and not another data
type like strings or numbers.

Make sure that you are using the .push() method to
add the entire flower object to the array, and not
a specific property of the flower.
`)

    success = false
}



const zones = zoneFlowers()

if (success && zones.length !== 4) {
    console.log(`\x1b[91m
*************************
****   TEST FAILED   ****
*************************`)
console.log(`\x1b[93m
The test code expected that 4 flowers should be
be the array of flowers zoned to 3 and 8.

There were ${zones.length} items in the array.
`)

    success = false
}

if (success && zones.length > 0 && Object.prototype.toString.call(zones[0]) !== "[object Object]") {
    console.log(`\x1b[91m
*************************
****   TEST FAILED   ****
*************************`)
console.log(`\x1b[93m
The test code expected that the array of zoned
flowers should contain objects and not another data
type like strings or numbers.

Make sure that you are using the .push() method to
add the entire flower object to the array, and not
a specific property of the flower.
`)

    success = false
}



const orange = orangeFlowers()


if (success && orange.length !== 5) {
    console.log(`\x1b[91m
*************************
****   TEST FAILED   ****
*************************`)
console.log(`\x1b[93m
The test code expected that 5 flowers should be
be the array of orange flowers.

There were ${orange.length} items in the array.

Make sure that you have an \`if\` condition that
is checking if the colors property array includes
the string of "Orange".
`)

    success = false
}

if (success && orange.length > 0 && Object.prototype.toString.call(orange[0]) !== "[object Object]") {
    console.log(`\x1b[91m
*************************
****   TEST FAILED   ****
*************************`)
console.log(`\x1b[93m
The test code expected that the array of orange
flowers should contain objects and not another data
type like strings or numbers.

Your array contains the following values:
[${orange}]

Make sure that you are using the .push() method to
add the entire flower object to the array, and not
a specific property of the flower.
`)

    success = false
}


const htmlRepresentations = flowersAsHTML()

if (success) {
    const htmlContainsArticleTags = htmlRepresentations.match(/article/g)?.length / 2 || 0
    const htmlContainsSectionTags = htmlRepresentations.match(/section/g)?.length / 2 || 0
    const htmlContainsDivTags = htmlRepresentations.match(/div/g)?.length / 2 || 0

    if (htmlContainsArticleTags !== 9 || htmlContainsSectionTags !== 41 || htmlContainsDivTags !== 51) {
        console.log(`\x1b[91m
*************************
****   TEST FAILED   ****
*************************`)
        console.log(`\x1b[93m
The test code expected that 9 <article> elements should be
in the HTML representation.

There were ${htmlContainsArticleTags} articles in the string.

-----------------------------------------------------------

The test code expected that 41 <section> elements should be
in the HTML representation.

There were ${htmlContainsSectionTags} sections in the string.

-----------------------------------------------------------
The test code expected that 51 <div> elements should be
in the HTML representation.

There were ${htmlContainsDivTags} divs in the string.
`)

        success = false
    }
}



if (success) {
    console.log(`\x1b[92m
*********************************
****   ALL TESTS SUCCEEDED   ****
*********************************

Congratulations on writing valid code for your first
self-assessment project.
`)

}


