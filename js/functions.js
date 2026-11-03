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

const isMeetingWithinWorkday = (startWork, endWork, startMeeting, duration) => {
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStart = timeToMinutes(startWork);
  const workEnd = timeToMinutes(endWork);
  const meetingStart = timeToMinutes(startMeeting);
  const meetingEnd = meetingStart + duration;

  return meetingStart >= workStart && meetingEnd <= workEnd;
};
isMeetingWithinWorkday('08:00', '17:30', '14:00', 90);
