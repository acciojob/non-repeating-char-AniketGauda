function firstNonRepeatedChar(str) {
 // Write your code here
	let obj = {};
    for(let i=0;i<str.length;i++){
        let ch = str[i];
        if(ch in obj)
            obj[ch]++;
        else
            obj[ch] = 1;
    }
    let ans=null;
    for(let key in obj){
        if(obj[key]==1){
            ans=key;
        }
    }

    return ans;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
