const checkStringLength = (str, maxLength) => str.length <= maxLength;
checkStringLength('проверяемая строка', 10);

const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
};
isPalindrome('Лёша на полке клопа нашёл ');

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
extractNumbers('abc123def456');
