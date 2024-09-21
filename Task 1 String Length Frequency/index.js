const mostFrequentStringLengths = (array) => {
  const stringLengths = array.map((item) => item.length)

  let countFrequents = []
  stringLengths.forEach((i) => {
    countFrequents[i] = (countFrequents[i] || 0) + 1
  })

  const mostFrequentValue = Math.max(...Object.values(countFrequents))
  const mostFrequentLengths = Object.keys(countFrequents).filter(
    (key) => countFrequents[key] === mostFrequentValue
  )

  let result = []
  mostFrequentLengths.forEach((length) => {
    result.push(...array.filter((item) => item.length === parseInt(length)))
  })

  return result
}

const runTests = () => {
  const testCases = [
    {
      input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'],
      output: ['ab', 'cd', 'gh'],
      description:
        'The string lengths are [1, 2, 3, 2, 3, 2]. The most frequent length is 2',
    },
    {
      input: ['55555', '22', '333', '4444', '666666'],
      output: ['22', '333', '4444', '55555', '666666'],
      description:
        'The string lengths are [ 5, 2, 3, 4, 6 ]. The most frequent length are 2, 3, 4, 5, 6',
    },
    {
      input: ['55555', '4444', '333', '55555', '22', '4444'],
      output: ['4444', '4444', '55555', '55555'],
      description:
        'The string lengths are [ 5, 4, 3, 5, 2, 4 ]. The most frequent length are 4 and 5',
    },
    {
      input: [],
      output: [],
      description: 'Test case with an empty array',
    },
  ]

  testCases.forEach((test, index) => {
    const result = mostFrequentStringLengths(test.input)

    const passed = JSON.stringify(result) == JSON.stringify(test.output)
    console.log(
      `Test case ${index + 1}: ${test.description} - ${
        passed ? 'PASSED' : 'FAILED'
      }`
    )
  })
}

runTests()
