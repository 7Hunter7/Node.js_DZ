// Функция случайного целого числа
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция случайного числа с плавающей запятой
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// Функция случайной строки
function randomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

// Функция случайного ключа
function randomKey(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let randomKey = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomKey += characters.charAt(randomIndex);
  }
  return randomKey;
}

module.exports = { randomInt, randomFloat, randomString, randomKey };
