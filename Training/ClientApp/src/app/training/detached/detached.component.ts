import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/shared.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OnPushInnerComponent } from '../on-push-inner/on-push-inner.component';
import { StandardInnerComponent } from '../standard-inner.component/standard-inner.component';

@Component({
  selector: 'app-detached',
  standalone: true,
  imports: [CommonModule, StandardInnerComponent, OnPushInnerComponent, ReactiveFormsModule],
  templateUrl: './detached.component.html',
  styleUrls: ['./detached.component.css']
})
export class DetachedComponent {
  numberControl: FormControl<number> = new FormControl();
  numberToPass: number;
  array: string[] = [];
  sharedNumberSubscribe: number;


  @Input()
  numberFromParent: number;
  
  @Input()
  arrayFromParent: string[];
  
  constructor(public sharedService: SharedService,
    private cdr:ChangeDetectorRef) {
      this.cdr.detach();
    }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.numberControl.valueChanges.subscribe( val => {
      this.numberToPass = val;
    });
    this.sharedService.sharedObservableNumber.subscribe(val => this.sharedNumberSubscribe = val);
  }

  onEmptyClick() {
  }

  onDetectChangesClick() {
    this.cdr.detectChanges();
  }
  
  getString() {
    return  this.arrayFromParent.join();
  }
}
