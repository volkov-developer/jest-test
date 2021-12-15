const arrayFilter = require('./tasks/task_02.js');

describe(
    'Filtering the array',
    () => {
        const testCases = [
            {
                in: [0, 1, 2, 3, 4],
                expected: [0, 2, 4]
            },
            {
                in: [true, false, true, false, true, false],
                expected: [true, true, true]
            }
        ];

        testCases.forEach(test => {
            it (
                `in: ${test.in} expected: ${test.expected}`,
                () => {
                    const res = arrayFilter(test.in);
                    expect(res).toEqual(test.expected);
                }
            )
        })
    }
)