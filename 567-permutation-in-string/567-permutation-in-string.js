/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
   if(s1.length > s2.length) return false;
    
    const s1Map = new Map();
    let s1Sum = 0;
    const s2Map = new Map();
    let s2Sum = 0;
    
    for(let i = 0; i < s1.length; i++){
        s2Sum += s1.charCodeAt(i);
        const count = s2Map.get(s1.charAt(i)) || 0;
        s2Map.set(s1.charAt(i), count + 1);
    }
    
    for(let i = 0; i< s2.length; i++){
        if(i >= s1.length){
            const ch = s2.charAt(i-s1.length);
            const count = s1Map.get(ch);
            s1Map.set(ch, count - 1);
            const chCode = s2.charCodeAt(i - s1.length);
            s1Sum -= chCode;
        }
        
        const ch = s2.charAt(i);
        const count = s1Map.get(ch)|| 0;
        s1Map.set(ch, count + 1);
        const chCode = s2.charCodeAt(i);
        s1Sum += chCode;
        
        if(s1Sum == s2Sum){
            let isFound = true;
            s2Map.forEach((value,key)=>{
                if(s1Map.get(key) !== value){
                    isFound = false;
                    return;
                }
            });
            if(isFound) return true;
        }
    }    
    
    return false;
};
