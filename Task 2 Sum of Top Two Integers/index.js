const sumOfTopTwoIntegers = (array) => {
  let max1 = (max2 = -Infinity)
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max1) {
      max2 = max1
      max1 = array[i]
    } else if (array[i] > max2) max2 = array[i]
  }
  return max1 + max2
}

const runTests = () => {
  const testCases = [
    {
      input: [1, 4, 2, 3, 5],
      output: 9,
      description: 'The two largest integers are 5 and 4. Their sum is 9.',
    },
    {
      input: [10, 15, 5, 20],
      output: 35,
      description: 'The two largest integers are 20 and 15. Their sum is 35.',
    },
    {
      input: [-1, -2, -3, -4],
      output: -3,
      description: 'The two largest integers are -1 and -2. Their sum is -3.',
    },
    {
      input: [100],
      output: -Infinity,
      description:
        'The array contains only one integer, so the second largest does not exist, resulting in -Infinity.',
    },
    {
      input: [7, 7, 7, 7],
      output: 14,
      description:
        'All integers are the same. The two largest integers are 7 and 7. Their sum is 14.',
    },
    {
      input: [3, 1],
      output: 4,
      description: 'The two largest integers are 3 and 1. Their sum is 4.',
    },
  ]

  testCases.forEach((test, index) => {
    const result = sumOfTopTwoIntegers(test.input)

    const passed = result === test.output
    console.log(
      `Test case ${index + 1}: ${test.description} - ${
        passed ? 'PASSED' : 'FAILED'
      }`
    )
  })
}

runTests()
