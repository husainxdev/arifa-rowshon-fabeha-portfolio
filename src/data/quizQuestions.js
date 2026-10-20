export const quizQuestions = [
  {
    question: "Which data structure removes the most recently added item first?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    answer: 1,
    explanation: "A stack uses last in, first out (LIFO) order.",
  },
  {
    question: "What must be true before using binary search on an array?",
    options: ["Every value is unique", "The array is sorted", "All values are positive", "The array has an even length"],
    answer: 1,
    explanation: "Binary search can discard half the search space because the values are ordered.",
  },
  {
    question: "Which C++ vector method adds an element at the end?",
    options: ["insert_front()", "append()", "push_back()", "add_last()"],
    answer: 2,
    explanation: "std::vector::push_back adds a new element after the current last element.",
  },
  {
    question: "Which data structure is commonly used in breadth-first search?",
    options: ["Stack", "Queue", "Min-heap", "Hash set"],
    answer: 1,
    explanation: "A queue visits nodes in the order they were discovered, level by level.",
  },
  {
    question: "What is the time complexity of binary search on a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 1,
    explanation: "Each comparison halves the remaining search space, giving O(log n) time.",
  },
];
