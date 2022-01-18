/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var words = s.split(' ');
    console.log(words)
    var length = words.length;
    var newString = ""
    for(var i = 0; i < words.length; i++){
        for (var j = words[i].length - 1; j >= 0; j--) { 
        newString += words[i][j]; // or newString = newString + str[i];
            
    }
        length--;
        if(length > 0){
           newString += ' ';
        }
      
    }
    
    
    
    
    return newString
    
    
};


// var reverseString = function(s) {
//     var l = 0;
//     var r = s.length-1;
//     var pivot = s.length / 2;
//     while(pivot > 0){
//         [s.charAt(l), s.charAt(r)] = [s.charAt(r), s.charAt(l)]
//         l++;
//         r--;
//         pivot--;
//     }
//     return s
// };