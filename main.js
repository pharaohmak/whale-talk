document.getElementById('extractButton').addEventListener('click', () => {
    let input = document.getElementById('inputText').value;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const resultArray = [];

    for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
        for (let vowel = 0; vowel < vowels.length; vowel++) {
            if (input[inputIndex] === vowels[vowel]) {
                if (input[inputIndex] === 'e') {
                    resultArray.push('ee');
                } else if (input[inputIndex] === 'u') {
                    resultArray.push('uu');
                } else {
                    resultArray.push(input[inputIndex]);
                }
            }
        }
    }

    document.getElementById('result').innerText = resultArray.join('').toUpperCase();
});