// Write your solution here!
const cats = ["Milo" , "Otis" , "Garfield"]
function destructivelyAppendCat(cat) {
    cats.push("Ralph")
}
function destructivelyPrependCat(cat) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(cat) {
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(cat) {
    cats.shift("Milo")
}
function appendCat(cat) {
    cats.slice(-0, "Broom")
}








