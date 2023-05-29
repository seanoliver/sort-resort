interface InsertionSortProps {
  arr: number[];
  updateActiveBars: (activeBars: number[]) => void;
  updateBars: (bars: number[]) => void;
}

export default async function insertionSort(
  arr: number[],
  updateActiveBars: (activeBars: number[]) => void,
  updateBars: (bars: number[]) => void
) {
  const newArr = [...arr];
  for (let i = 1; i < newArr.length; i++) {
    updateActiveBars([i]);
    await new Promise(resolve => setTimeout(resolve, 25));
    let j = i - 1;
    while (j >= 0 && newArr[j] > newArr[j + 1]) {
      updateActiveBars([j, j + 1]);
      await new Promise(resolve => setTimeout(resolve, 25));
      [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      updateBars(newArr);
      updateActiveBars([]);
      j--;
    }
  }
  return newArr;
}