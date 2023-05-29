interface SelectionSortProps {
  arr: number[];
  updateActiveBars: (activeBars: number[]) => void;
  updateBars: (bars: number[]) => void;
}

export default async function selectionSort(
  arr: number[],
  updateActiveBars: (activeBars: number[]) => void,
  updateBars: (bars: number[]) => void
) {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    let min = i;
    for (let j = i + 1; j < newArr.length; j++) {
      updateActiveBars([min, j]);
      await new Promise(resolve => setTimeout(resolve, 25));
      if (newArr[j] < newArr[min]) {
        min = j;
      }
    }
    [newArr[i], newArr[min]] = [newArr[min], newArr[i]];
    updateBars(newArr);
    updateActiveBars([]);
  }
  return newArr;
}