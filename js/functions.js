const checkStringLength = (str, maxLength) => str.length <= maxLength;


const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
};

const extractNumbers = (value) => {
  const string = value.toString();
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const digit = parseInt(string[i], 10);

    if (!Number.isNaN(digit)) {
      result += digit;
    }
  }

  return result === '' ? NaN : parseInt(result, 10);
};

console.log(checkStringLength('проверяемая строка', 20)); // true
console.log(checkStringLength('проверяемая строка', 18)); // true
console.log(checkStringLength('проверяемая строка', 10)); // false

console.log(isPalindrome('топот'));                 // true
console.log(isPalindrome('ДовОд'));                 // true
console.log(isPalindrome('Кекс'));                  // false
console.log(isPalindrome('Лёша на полке клопа нашёл')); // true

console.log(extractNumbers('2023 год'));            // 2023
console.log(extractNumbers('ECMAScript 2022'));     // 2022
console.log(extractNumbers('1 кефир, 0.5 батона')); // 105
console.log(extractNumbers('агент 007'));           // 7
console.log(extractNumbers('а я томат'));           // NaN
console.log(extractNumbers(2023));                 // 2023
console.log(extractNumbers(-1));                    // 1
console.log(extractNumbers(1.5));                   // 15
