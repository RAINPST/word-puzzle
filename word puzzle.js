let words = ['муха', 'мура', 'тура', 'тара', 'кара', 'каре', 'кафе', 'кафр', 'каюр', 'каюк', 'крюк', 'урюк', 'урок', 'срок', 'сток', 'стон', 'слон'];

let nextWord = (word) => {
    let index = words.indexOf(word);
    if (index !== -1) {
        return words[index + 1];
    }
    return 'Word not found';
};

let result = [];
for (let i = 0; i < words.length - 1; i++) {
    result.push(nextWord(words[i]));
}

console.log(result);
