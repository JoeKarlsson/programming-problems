// Given an array of SKUs return the number of duplicate SKUs.
// i.e. fn([1234, 5678, 1234, 7777, 0000, 0000]) => 2
// Since 1234 and 0000 are duplicates, the answer is 2
// Can be solved in O(n), but there is an obvious O(n^2) solution

// Given an array of SKUs, return the top k SKUs and their frequency.
// i.e. fn(3, [12,
// Can be done in O(n)
// Write a function to flatten an array of arrays nested N levels deep.
// fn([12, [34, 56], [78, [[9,10]],11]) = > [1,2,3,4,5,6,7,8,9,10]
// Can be done in O(n)

// Write a function to determine the maximum discount for a time period, given the following rules:
// Day 1 – Day 5 => 10%
// Day 2 – Day 7 => 5%
// Day 4 – Day 6 => 20%
// i.e. fn(4 (day)) => 10 + 5 + 20 = 35%

// Given a list of products and their corresponding bundle prices. The customer wants to purchase N quantity of products from Best Buy. Provide a function which suggests the customer N quantity of products with the minimum price.
// i.e
// Quantity of Products = [10, 20, 30, 15, 25]
// Price of product bundle = [100, 200, 120, 130, 165]
// Customer wants to purchase 500 quantity of products – What is the minimum price?
// This is an example of a “ Greedy Knapsack problem.”
// Resource: https://en.wikipedia.org/wiki/Knapsack_problem
