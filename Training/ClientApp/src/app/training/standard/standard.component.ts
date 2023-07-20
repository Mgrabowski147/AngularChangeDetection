import { CommonModule } from '@angular/common';
import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { OnPushInnerComponent } from '../on-push-inner/on-push-inner.component';
import { StandardInnerComponent } from '../standard-inner.component/standard-inner.component';
import { Example } from '../example.enum';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css'],
  standalone: true,
  imports: [CommonModule, StandardInnerComponent, OnPushInnerComponent, ReactiveFormsModule]
})
export class StandardComponent implements OnInit {
  numberControl: FormControl<number> = new FormControl();
  array: string[] = [];
  sharedNumberSubscribe: number;

  Example = Example;

  @Input()
  numberFromParent: number;
  
  @Input()
  arrayFromParent: string[];
  
  constructor(public sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.sharedObservableNumber.subscribe(val => {
      this.sharedNumberSubscribe = val;
    });
  }

  onEmptyClick() {
  }

  onFetchData() {
    this.sharedService.fetchData();
  }

  getString() {
    return  this.arrayFromParent.join();
  }
}
