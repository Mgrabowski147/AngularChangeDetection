import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-standard-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standard-error.component.html',
  styleUrls: ['./standard-error.component.css']
})
export class StandardErrorComponent {
  @Output()
  valueForParent = new EventEmitter<number>();
  
  randomNumber: number;
  
  constructor(public sharedService: SharedService) {}

  OnChangeDetection() {
    this.randomNumber = Math.floor(Math.random()*1000);
    this.valueForParent.emit(this.randomNumber);
  } 

  emitValue() {
    this.randomNumber = Math.floor(Math.random()*1000);
    this.valueForParent.emit(this.randomNumber);
  }
}
