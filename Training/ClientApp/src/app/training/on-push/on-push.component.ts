import { ChangeDetectionStrategy, Component, DoCheck, Input, NgZone, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { OnPushInnerComponent } from '../on-push-inner/on-push-inner.component';
import { StandardInnerComponent } from '../standard-inner.component/standard-inner.component';
import { DetachedComponent } from '../detached/detached.component';
import { Example } from '../example.enum';
import { DetachedDoCheckComponent } from '../detached-do-check/detached-do-check.component';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, StandardInnerComponent, OnPushInnerComponent, ReactiveFormsModule, DetachedComponent, DetachedDoCheckComponent]

})
export class OnPushComponent implements OnInit {
  constructor(public sharedService: SharedService, private ngZone: NgZone) {
  }

  Example = Example;
  sharedNumberSubscribe: number;

  @Input()
  numberFromParent: number;
  
  @Input()
  arrayFromParent: string[];
  stringFromParent: string;
  
  numberControl: FormControl<number> = new FormControl();
  numberToPass: number;

  ngOnInit(): void {
    this.numberControl.valueChanges.subscribe( val => {
      this.numberToPass = val;
    });
    this.sharedService.sharedObservableNumber.subscribe(val => this.sharedNumberSubscribe = val);
  }

  getString() {
    return  this.arrayFromParent.join();
  }


  onEmptyClick() {

  }
  
  onFetchData() {
    this.sharedService.fetchData();
  }

  TimeoutOutOfZone() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.sharedService.sharedNumber = Math.floor(Math.random()*1000);
      }, 2000)
    });
  }

  Timeout() {
    setTimeout(() => {
      this.sharedService.sharedNumber = Math.floor(Math.random()*1000);
    }, 2000)  
  }
  
  logSomething() {
    console.log(" onpush component log");
  }
}
