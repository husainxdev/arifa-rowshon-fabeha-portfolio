// Snippets run inside main(); standard C++ headers are assumed.
export const quizQuestions = [
  {
    file: "max_subarray.cpp",
    code: [
      "int a[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};",
      "int best = a[0], current = a[0];",
      "for (int i = 1; i < 9; i++) {",
      "  current = max(a[i], current + a[i]);",
      "  best = max(best, current);",
      "}",
      "cout << best;",
    ],
    options: ["4", "6", "7"],
    answer: 1,
    explanation: "The largest contiguous sum is 4 + (-1) + 2 + 1 = 6.",
  },
  {
    file: "stack.cpp",
    code: ["stack<int> values;", "values.push(2);", "values.push(5);", "values.pop();", "cout << values.top();"],
    options: ["2", "5", "0"],
    answer: 0,
    explanation: "A stack removes the last value pushed. After popping 5, the top is 2.",
  },
  {
    file: "binary_search.cpp",
    code: ["vector<int> numbers = {2, 4, 6, 8};", "cout << binary_search(", "  numbers.begin(), numbers.end(), 6", ");"],
    options: ["0", "1", "2"],
    answer: 1,
    explanation: "binary_search returns true when it finds 6; cout prints true as 1 by default.",
  },
  {
    file: "loop.cpp",
    code: ["int total = 0;", "for (int i = 1; i <= 5; i += 2) {", "  total += i;", "}", "cout << total;"],
    options: ["6", "9", "15"],
    answer: 1,
    explanation: "The loop adds 1, 3, and 5, giving a total of 9.",
  },
  {
    file: "vector.cpp",
    code: ["vector<int> numbers = {1, 2, 3, 4};", "cout << accumulate(", "  numbers.begin(), numbers.end(), 0", ");"],
    options: ["4", "10", "24"],
    answer: 1,
    explanation: "accumulate starts at 0 and adds 1 + 2 + 3 + 4, so the result is 10.",
  },
];
