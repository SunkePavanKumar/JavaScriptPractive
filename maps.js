// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
const map = new Map()
map.set(1, "pavan Kumar");
map.set(2, "kumar")
console.log(map.has("pavan kumar"))  // checks weater the key is present or not
console.log(map.get(1))  // gets the value of the key
console.log(map.size)  // return the size of the map
map.delete(1);  // deletes the key  and return the boolean as output
console.log(map)


// map constructor

const mapConstructor = new Map([
    [1, "sunke"],
    [2, "pavan"],
    [3, "Kumar"]
]

)

console.log(mapConstructor)