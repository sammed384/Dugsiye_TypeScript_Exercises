// 1. 🧪 Add Types to a Function

function fullName(first : string, last: string): string {
    return first + " " + last;
  }
  
//   2. ⚙️ Optional and Default Parameters


function registerUser(username : string, isAdmin?: boolean, language: string = "en") {
    console.log(registerUser("sam", false, "fr" ));
 }

//  ### 3. 🔁 Create a Safe Rest Function


function average (...scores: number[]): number {
    if (scores.length === 0) {
        return 0;
    }
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Test with 3–5 values

console.log(average(10, 50, 100));       // 53.333333333333336
console.log(average(2, 4, 6, 8));      // 5
console.log(average(100, 50, 25, 75)); // 62.5