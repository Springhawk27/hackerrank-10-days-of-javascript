function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case ("aeiou".includes(s.charAt(0))):
            letter = "A";
            break;
        case ("bcdfg".includes(s.charAt(0))):
            letter = "B";
            break;
        case ("hjklm".includes(s.charAt(0))):
            letter = "C";
            break;
        case ("npqrstvwxyz".includes(s.charAt(0))):
            letter = "D";
            break;
    }
    return letter;
}