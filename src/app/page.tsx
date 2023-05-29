'use client';

import React, { useState, useEffect } from 'react';
import { createArray, randomizeArray } from '@/util/helpers';
import bubbleSort from '@/util/bubbleSort';
import insertionSort from '@/util/insertionSort';
import selectionSort from '@/util/selectionSort';

export default function Home() {
	const [bars, setBars] = useState<number[]>([]);
	const [activeBars, setActiveBars] = useState<number[]>([]);

	const handleSort = async evt => {
		const newBars = [...bars];
		const sortType = evt.target.id;

		if (sortType === 'bubbleSort')
			await bubbleSort(newBars, setActiveBars, setBars);
		if (sortType === 'insertionSort')
			await insertionSort(newBars, setActiveBars, setBars);
		if (sortType === 'selectionSort')
			await selectionSort(newBars, setActiveBars, setBars);
	};

	const handleReset = () => {
		setBars(randomizeArray(createArray(30)));
	};

	useEffect(() => {
		setBars(randomizeArray(createArray(30)));
	}, []);

	return (
		<div className='Home container mx-auto w-screen h-screen flex justify-center items-center flex-col'>
			<a className='text-center mb-4' onClick={handleReset}>Reset</a>
			<span>
				<a
					className='text-center mb-4'
					onClick={handleSort}
					id='bubbleSort'>
					Bubble Sort
				</a>
				{' | '}
				<a
					className='text-center mb-4'
					onClick={handleSort}
					id='insertionSort'>
					Insertion Sort
				</a>
				{' | '}
				<a
					className='text-center mb-4'
					onClick={handleSort}
					id='selectionSort'>
					Selection Sort
				</a>
			</span>

			<div className='Home-chart-container bg-black w-4/5 h-4/5 flex justify-center items-end'>
				{bars.map((bar, index) => (
					<Bar
						key={`${bar}-${index}`}
						val={bar}
						len={bars.length}
						idx={index}
						active={activeBars.includes(index)}
					/>
				))}
			</div>
		</div>
	);
}

/**
 * Interface for the Bar component
 */
interface BarProps {
	val: number;
	len: number;
	idx: number;
	active?: boolean;
}

/**
 * Renders an individual bar in the chart based on
 * the value, index, and length of the array
 */
const Bar: React.FC<BarProps> = ({ val, len, idx, active }) => {
	return (
		<>
			<div
				className={`Home-chart-bar ${
					active ? 'bg-emerald-300' : 'bg-white'
				} w-full mx-0.5 text-center font-bold`}
				style={{
					height: `${(val / len) * 100}%`,
				}}></div>
		</>
	);
};
