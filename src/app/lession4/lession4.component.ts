import { Component } from '@angular/core';

// uppgit 1
// uppgift 1

// function sortArray(arr: number[]): number[] {
//   let newArray: number[] = [];
//   while (arr.length > 0) {
//     let minIndex = arr.indexOf(Math.min(...arr));
//     newArray.push(arr[minIndex]);
//     arr.splice(minIndex, 1);
//   }
//   return newArray;
// }

// let numbers = [4, 2, 7, 1, 9, -3];
// let sortedArray = sortArray(numbers);
// console.log(sortedArray);

// Uppgift 2

// function selectionSort(arr: number[]): number[] {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
//     }
//   }

//   return arr;
// }

// // Example usage
// const arrayToSort = [64, 25, 12, 22, 11];
// console.log('Array before sorting:', arrayToSort);
// const sortedArray2 = selectionSort(arrayToSort);
// console.log('Array after sorting:', sortedArray2);

// uppgift 3
// Function to perform insertion sort
function insertionSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage
const arrayToSort = [12, 11, 13, 5, 6];
console.log('Array before sorting:', arrayToSort);
const sortedArray = insertionSort(arrayToSort);
console.log('Array after sorting:', sortedArray);

@Component({
  selector: 'app-lession4',
  standalone: true,
  imports: [],
  templateUrl: './lession4.component.html',
  styleUrl: './lession4.component.css',
})
export class Lession4Component {
  public banan: string = 'hej hej';
}
