function reverseStr(str) {

    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }

}

reverseStr("Chicken IS a bird");

// function reverseStr(str) {

//     let splitString = str.split("");
//     // console.log(splitString);

//     let reverseArray = splitString.reverse();
//     // console.log(reverseArray);

//     let joinArray = reverseArray.join("");

//     let removeSpace = joinArray.replace(/\s+/g, "");
//     console.log(removeSpace);
// }

// reverseStr("Chicken IS a bird");