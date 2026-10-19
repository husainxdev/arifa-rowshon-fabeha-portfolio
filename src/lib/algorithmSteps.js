export const exampleValues = [3, 7, 12, 18, 24, 31, 46, 59];

export function binarySearchSteps(values, target) {
  let low = 0, high = values.length - 1, comparisons = 0;
  const steps = [{ low, high, pointers: [], status: "ready", comparisons, text: `Search for ${target} in this sorted array. Start with the full range.` }];
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    comparisons++;
    const found = values[mid] === target;
    steps.push({ low, high, pointers: [mid], status: found ? "found" : "compare", comparisons,
      text: found ? `${values[mid]} matches ${target}. Found at index ${mid}.` : values[mid] < target ? `${values[mid]} is smaller than ${target}. Discard indices ${low}–${mid} and search to the right.` : `${values[mid]} is greater than ${target}. Discard indices ${mid}–${high} and search to the left.` });
    if (found) return steps;
    if (values[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  steps.push({ low, high, pointers: [], status: "missing", comparisons, text: `The search range is empty. ${target} is not in the array.` });
  return steps;
}

export function pairSumSteps(values, target) {
  let low = 0, high = values.length - 1, comparisons = 0;
  const steps = [{ low, high, pointers: [], status: "ready", comparisons, text: `Find two different positions whose values add up to ${target}. Start at the two ends of this sorted array.` }];
  while (low < high) {
    const sum = values[low] + values[high];
    comparisons++;
    const found = sum === target;
    steps.push({ low, high, pointers: [low, high], status: found ? "found" : "compare", comparisons,
      text: found ? `${values[low]} + ${values[high]} = ${target}. Pair found at indices ${low} and ${high}.` : sum < target ? `${values[low]} + ${values[high]} = ${sum}, below ${target}. Move the left pointer right to increase the sum.` : `${values[low]} + ${values[high]} = ${sum}, above ${target}. Move the right pointer left to decrease the sum.` });
    if (found) return steps;
    if (sum < target) low++;
    else high--;
  }
  steps.push({ low, high, pointers: [], status: "missing", comparisons, text: `The pointers have met. No pair of different positions adds up to ${target}.` });
  return steps;
}
