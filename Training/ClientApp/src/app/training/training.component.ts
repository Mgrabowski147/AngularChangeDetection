import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnPushComponent } from './on-push/on-push.component';
import { StandardComponent } from './standard/standard.component';
import { SharedService } from '../shared.service';
import { DetachedComponent } from './detached/detached.component';
import { AllLifecycleComponent } from './all-lifecycle/all-lifecycle.component';
import { BehaviorSubject } from 'rxjs';
import { Example } from './example.enum';
import { StandardErrorComponent } from './standard-error/standard-error.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, 
    MatFormFieldModule, 
    ReactiveFormsModule, 
    OnPushComponent, 
    StandardComponent, 
    FormsModule,
    DetachedComponent,
    AllLifecycleComponent,
    StandardErrorComponent
  ],
  providers: [SharedService],
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  arrayControl: FormControl<string> = new FormControl();
  arrayForChildren: string[] = [];
  numberForChildren: number = 0;
  sharedServiceNumberSubscribed: number;
  Example = Example;
  exampleNo = new BehaviorSubject<Example>(Example.Default);
  valueFromChildsOutput: number;

  constructor(public sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.exampleNo = this.exampleNo;
    this.handleInputChange();
    this.sharedService.sharedObservableNumber.subscribe(val => this.sharedServiceNumberSubscribed = val);
  }

  private handleInputChange() {
    this.arrayControl.valueChanges.subscribe(
      newText => {
        for(let i = this.arrayForChildren.length; i > 0; i--) {
          this.arrayForChildren.pop();
        }
        for(let i = 0; i < newText.length; i++) {
          this.arrayForChildren.push(newText[i]);
        }
      }
    )
  }

  onEmptyClick() {
  }

  onFetchData() {
    this.sharedService.fetchData();
  }

  onServiceValueClick() {
    this.sharedService.sharedNumber = Math.floor(Math.random()*1000);
  }

  onServiceObservableValueClick() {
    this.sharedService.sharedObservableNumber.next(Math.floor(Math.random()*1000));
  }

  setExample(number: number) {
    this.exampleNo.next(number);
    this.sharedService.reset();
  }

  onValueChange(num: number) {
    console.log(num);
    this.valueFromChildsOutput = num;
  }

}
