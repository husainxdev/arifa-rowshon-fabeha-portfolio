// Short C++ questions adapted from the uploaded portfolio's code terminal.
// They are an interactive visitor activity, not claims about Arifa's results.
export const codePuzzles = [
  {
    code: 'cout << 7 / 2 << " " << 7 % 2;',
    options: ["3 1", "3.5 1", "3 0"],
    answer: 0,
    explanation: "Integer division gives 3, and 7 divided by 2 leaves remainder 1.",
  },
  {
    code: 'cout << 2 + 3 * 4;',
    options: ["20", "14", "24"],
    answer: 1,
    explanation: "Multiplication happens first: 3 × 4 = 12, then 2 + 12 = 14.",
  },
  {
    code: 'int x = 8;\ncout << (x >> 1);',
    options: ["16", "4", "7"],
    answer: 1,
    explanation: "Shifting 8 right by one bit divides it by two, giving 4.",
  },
  {
    code: 'string s = "hello";\ncout << s.size();',
    options: ["4", "5", "6"],
    answer: 1,
    explanation: "The string contains five characters.",
  },
];
