import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { Example } from '../example.enum';

@Component({
  selector: 'app-onpush-inner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './on-push-inner.component.html',
  styleUrls: ['./on-push-inner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushInnerComponent {
  numberControl: FormControl<number> = new FormControl();
  @Input()
  numberFromParent: number;
  sharedNumberSubscribe: number;

  @Input()
  arrayFromParent: string[];
  
  Example = Example;

  constructor(public sharedService: SharedService) {}

  ngOnInit() {
    console.log("init iinner onpush")
    this.sharedService.sharedObservableNumber.subscribe(val => this.sharedNumberSubscribe = val);
  }

  onEmptyClick() {

  }

  logSomething() {
    console.log("inner onpush component log");
  }
}
