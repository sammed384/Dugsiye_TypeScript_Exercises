// 1. 🧪 Add Types to a Function
function fullName(first, last) {
    return first + " " + last;
}
//   2. ⚙️ Optional and Default Parameters
function registerUser(username, isAdmin, language) {
    if (language === void 0) { language = "en"; }
    console.log(registerUser("sam", false, "fr"));
}
//  ### 3. 🔁 Create a Safe Rest Function
function average() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    if (scores.length === 0) {
        return 0;
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
// Test with 3–5 values
console.log(average(10, 50, 100)); // 53.333333333333336
console.log(average(2, 4, 6, 8)); // 5
console.log(average(100, 50, 25, 75)); // 62.5
