import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor() { }

  heavyCalculateNthNumber(n: number): number {
    if (n == 0) {
      return 1;
    }
    var stack: number[] = [];
    let lastNumber: number;
    stack.push(n);
    let sum = 0;
    while (stack.length > 0) {
      lastNumber = stack.pop()!;
      if (lastNumber <= 1) {
        sum += 1;
      } else {
        stack.push(lastNumber - 1);
        stack.push(lastNumber - 2);
      }
    }

    return sum;
  }

  getNthNumber(n: number): Observable<number> {
    return new Observable(observer => {
      observer.next(this.heavyCalculateNthNumber(n));
    })
  }
}
