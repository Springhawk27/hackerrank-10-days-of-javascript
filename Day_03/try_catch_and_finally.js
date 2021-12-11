/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let splitedString = s.split("");
        let reversedString = splitedString.reverse();
        let joinedString = reversedString.join("");
        console.log(joinedString);
    } catch (err) {
        console.log(err.message);
        console.log(s);
    }
}