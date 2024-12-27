function isPalindrome(str) {
    str = str.toLowerCase();
    let result = "";
    let reverseStr = "";
    for (let i = 0; i < str.length; i++  ) {
        // if (str[i] != " " && str[i] != ",") {
        //     result += str[i];
        // }
        if (/[a-z0-9]/.test(str[i])) {
            result += str[i];
        }
    }

    // console.log(result);

    for (let i = result.length - 1; i >= 0; i--) {
        reverseStr += result[i];
    }
    // console.log(reverseStr);

    return (result === reverseStr) 

  }

  const val = isPalindrome("level"); 
    console.log(val);

  
