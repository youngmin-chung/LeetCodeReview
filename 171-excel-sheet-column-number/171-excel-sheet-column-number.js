/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const arr = [...columnTitle]
    console.log(arr)
    let res = 0;
    let incl = 0;
    for(let i = arr.length - 1; i >= 0; i-- ){
        console.log(Math.pow(26, incl))
        console.log(arr[i])
        res += calcColumn(arr[i]) * Math.pow(26, incl);
        
        console.log(res);
        ++incl;
    }
    
    return res
};


var calcColumn = function (col) {
    let val = 0
  switch(col) {
      case 'A':
        val = 1
        break;
      case 'B':
        val = 2
        break;
          case 'C':
        val = 3
        break;
          case 'D':
        val = 4
        break;
          case 'E':
        val = 5
        break;
          case 'F':
        val = 6
        break;
          case 'G':
        val = 7
        break;
          case 'H':
        val = 8
        break;
          case 'I':
        val = 9
        break;
          case 'J':
        val = 10
        break;
          case 'K':
        val = 11
        break;
          case 'L':
        val = 12
        break;
          case 'M':
        val = 13
        break;
          case 'N':
        val = 14
        break;
          case 'O':
        val = 15
        break;
          case 'P':
        val = 16
        break;
          case 'Q':
        val = 17
        break;
          case 'R':
        val = 18
        break;
          case 'S':
        val = 19
        break;
          case 'T':
        val = 20
        break;
          case 'U':
        val = 21
        break;
          case 'V':
        val = 22
        break;
          case 'W':
        val = 23
        break;
          case 'X':
        val = 24
        break;
          case 'Y':
        val = 25
        break;
          case 'Z':
        val = 26
        break;          
      default:
     // code block
    }
    
    return val;
}