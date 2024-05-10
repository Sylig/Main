//function to check if a string is palindrome
function checkPalindrome(string) {
  
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

    // check if first and last characters of string are the same
    if (string[i] !== string[len - 1 - i]) {
      return "; The word is not a palindrome.";
    }
  }
  return "; The word is a palindrome.";
}
// Function to enter a word
function myFunction() {
  let input = prompt("Enter a word", "Madam");
  if (input != null) {
    document.getElementById("demo").innerHTML =
      input + checkPalindrome(input.toLowerCase());
  }
}
