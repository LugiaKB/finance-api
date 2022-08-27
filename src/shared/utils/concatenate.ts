export const concatenate = (word: string, words: string[]) => {
    for (let wor of words) word += wor;

    return word;
};
