/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split("")
    for(let i=0;i<magazine.length;i++){
        if(ransomNote.includes(magazine[i])){
            let index = ransomNote.indexOf(magazine[i])
            if(ransomNote.length === 1){
                ransomNote = ""
            }else{
            ransomNote.splice(index, 1).join("")
            }
        }
    }
    if(ransomNote.length === 0) return true

    return false
};

console.log(canConstruct("aab", "baa"))


