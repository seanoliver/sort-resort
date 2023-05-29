interface BubbleSortProps {
	arr: number[];
	updateActiveBars: (activeBars: number[]) => void;
	updateBars: (bars: number[]) => void;
}

export default async function bubbleSort(
	arr: number[],
	updateActiveBars: (activeBars: number[]) => void,
	updateBars: (bars: number[]) => void
) {
	const newArr = [...arr];
	for (let i = newArr.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			updateActiveBars([j, j + 1]);
			console.log('newArr', newArr);
			await new Promise(resolve => setTimeout(resolve, 25));
			if (newArr[j] > newArr[j + 1]) {
				[newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
			}
			updateBars(newArr);
			updateActiveBars([]);
		}
	}
	return newArr;
}
