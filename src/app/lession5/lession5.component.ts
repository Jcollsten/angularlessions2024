import { Component } from '@angular/core';

function countChar(str: string, char: string): number {
  if (str.length === 0) {
    return 0;
  }
  if (str[0] === char) {
    return 1 + countChar(str.slice(1), char);
  } else {
    return countChar(str.slice(1), char);
  }
}
const str = 'Jag heter Joooonas';
const char = 'o';
console.log(
  `Antal förekomster av '${char}' i '${str}': ${countChar(str, char)}`
);

function reverseList<T>(list: T[]): T[] {
  if (list.length <= 1) {
    return list;
  }
  return [...reverseList(list.slice(1)), list[0]];
}
const originalList = [1, 2, 3, 4, 5];
const reversedList = reverseList(originalList);

function fetchData() {}

@Component({
  selector: 'app-lession5',
  standalone: true,
  imports: [],
  templateUrl: './lession5.component.html',
  styleUrl: './lession5.component.css',
})
export class Lession5Component {
  public svarFiveOne: string = `Antal förekomster av '${char}' i '${str}': ${countChar(
    str,
    char
  )}`;
  public svarFiveTwo: string = `Ursprunglig lista:, ${originalList}, Omvänd lista:, ${reversedList}`;
  public svarFiveThree: string = `Ursprunglig lista:, ${originalList}, Omvänd lista:, ${reversedList}`;
}
