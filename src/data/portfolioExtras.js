// The date describes this portfolio update, not a live feed of activity.
export const currentFocus = {
  updatedAt: "2026-10-18",
  items: [
    { label: "Learning", title: "Programming foundations", detail: "C, C++, Data Structures and Algorithms.", href: "#skills" },
    { label: "Exploring", title: "CloudSphere", detail: "An ongoing academic project on cloud services and data centres in Bangladesh.", href: "#projects" },
    { label: "Practising", title: "Problem-solving", detail: "Building understanding through programming and algorithmic practice.", href: "#coding" },
  ],
};

// Educational content for the portfolio; these are not claims about contest submissions.
export const conceptNotes = [
  {
    id: "stack-and-queue",
    category: "Data Structures",
    title: "Same items. Different order.",
    summary: "A stack and a queue differ in one small rule: which item leaves first.",
    sections: [
      { title: "The idea", text: "A stack follows last in, first out (LIFO). A queue follows first in, first out (FIFO). The right choice depends on the order a task needs." },
      { title: "Try it mentally", text: "Insert 10, then 20, then 30. Removing one item from a stack gives 30. Removing one from a queue gives 10. The values are identical; the removal rule changes the behaviour." },
      { title: "Where the rule helps", text: "A stack can track nested operations such as matching brackets. A queue can process work in arrival order or hold the frontier in breadth-first search." },
      { title: "A detail to remember", text: "Check empty() before accessing top() or front(). In C++, pop() removes the item and does not return its value." },
    ],
    code: "#include <stack>\n#include <queue>\n\nstd::stack<int> history;\nstd::queue<int> waiting;\nfor (int value : {10, 20, 30}) {\n    history.push(value);\n    waiting.push(value);\n}\n\nint last = history.top();   // 30\nhistory.pop();\nint first = waiting.front(); // 10\nwaiting.pop();",
    takeaway: "Choose the removal order before choosing the container.",
  },
  {
    id: "binary-search-invariant",
    category: "Algorithms",
    title: "Binary search starts with a promise.",
    summary: "Sorted data makes it possible to discard half of the remaining search range.",
    sections: [
      { title: "The promise", text: "The values must be sorted. At each step, if the target is present, it must lie inside the current search range." },
      { title: "One comparison, a smaller range", text: "Compare the target with the middle value. If the target is larger, only the right side can contain it. If it is smaller, keep the left side. Equality ends the search." },
      { title: "When to stop", text: "For inclusive bounds, continue while low <= high. Move to mid + 1 or mid - 1 after an unequal comparison so the range always shrinks. Crossing bounds means the target is absent." },
      { title: "Cost", text: "On a sorted array with constant-time indexing, binary search takes O(log n) comparisons and an iterative implementation uses O(1) extra space. Sorting an unsorted input is a separate cost." },
    ],
    code: "#include <vector>\n\nint binarySearch(const std::vector<int>& a, int target) {\n    int low = 0;\n    int high = static_cast<int>(a.size()) - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (a[mid] == target) return mid;\n        if (a[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}",
    takeaway: "Keep a clear invariant, then make every step shrink the range.",
  },
];

// Publish only verbatim feedback with permission. No sample people or quotes.
// { id, quote, name, role, permissionToPublish: true }
export const testimonials = [];
