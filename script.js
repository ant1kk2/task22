const numbers = [
  "    123456    ",
  "    -0123456     ",
  "           -12345 ",
  "-023456",
  "-000016     ",
  "-0000123456     ",
  "- 0000123456     ",
  "+000123456  ",
  " +a000123456  ",
  "  000g123456  ",
  "+000123456 2  ",
  " -1 000123456  ",
  "1.23456",
  ".123456",
  "123456.",
  "123.456",
];

const regExp = /^[\+\-]?0*?[1-9]\d{5}$/g;
const sixNumsValues = [];

numbers.forEach((num, i) => {
  const res = num.trim().match(regExp);
  console.log(res);
  res && sixNumsValues.push({ number: res[0], position: i });
});

console.log(sixNumsValues);
