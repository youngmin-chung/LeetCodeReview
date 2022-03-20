/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let res = []
    for(var i = 0; i < sentences.length; i++){
        const words = sentences[i].split(' ')
        res.push(words.length)
    }
    
    return Math.max(...res)
};