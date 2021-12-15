const reverseString = require('./tasks/task_01.js');

// test(
//     'Check reverse string',
//     () => {
//         expect(reverseString('hello www')).toBe('www olleh');
//     }
// );

// test(
//     'Check reverse string',
//     () => {
//         expect(reverseString('hey ho')).toBe('oh yeh');
//     }
// );

describe(
    'test 1 - task_01.js',
    () => {
        const testCases = [
            {
                inString: 'hello',
                expected: 'olleh'
            },
            {
                inString: 'hey ho',
                expected: 'oh yeh'
            },
            {
                inString: 'Hi! How are you doing?',
                expected: '?gniod uoy era woH !iH'
            }
        ]
        testCases.forEach(test => {
            it (
                `Input string: ${test.inString} expected: ${test.expected}`,
                () => {
                    const res = reverseString(test.inString);
                    expect(res).toBe(test.expected);
                }
            )
        })
    }
);