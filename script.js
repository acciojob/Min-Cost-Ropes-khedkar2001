function mincost(arr) {
    // Use a min-heap (priority queue). In JS, we can simulate it using a sorted array.
    // Sort initially to simulate the heap
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    while (arr.length > 1) {
        // Extract the two smallest elements
        let first = arr.shift();
        let second = arr.shift();

        // Cost to combine them
        let cost = first + second;
        totalCost += cost;

        // Insert the new rope back in the array in the correct position
        // to maintain sorted order
        let i = 0;
        while (i < arr.length && arr[i] < cost) {
            i++;
        }
        arr.splice(i, 0, cost);
    }

    return totalCost;
}

module.exports = mincost;
