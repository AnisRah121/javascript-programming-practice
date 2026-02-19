function isAnagram(str1, str2) {
    if (str1.length != str2.length) return false;

    let m1 = {}
    let m2 = {}

    for (let i = 0; i < str1.length; i++) {
        if (m1[str1[i]]) {
            m1[str1[i]]++
        }
        else {
            m1[str1[i]] = 1
        }
        if (m2[str2[i]]) {
            m2[str2[i]]++
        }
        else {
            m2[str2[i]] = 1
        }
    }
    for (let key in m1) {
       if(m1[key] != m2[key]){
        return false
       }
        
    }
    return true;
}

console.log(isAnagram('race','care'));
