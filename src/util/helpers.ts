/**
 * Creates an array of numbers from 1 to the given length
 */
export const createArray = (length: number) => {
	const arr = [];
	for (let i = 1; i <= length; i++) {
		arr.push(i);
	}
	return arr;
};

/**
 * Randomizes the order of an array
 */
export const randomizeArray = (arr: number[]) => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};