import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { Example } from '../example.enum';

@Component({
  selector: 'app-standard-inner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './standard-inner.component.html',
  styleUrls: ['./standard-inner.component.css']
})
export class StandardInnerComponent {
  numberControl: FormControl<number> = new FormControl();
  @Input()
  numberFromParent: Observable<number>;
  
  @Input()
  arrayFromParent: string[];

  Example = Example;

  constructor(public sharedService: SharedService) {

  }

  onEmptyClick() {

  }

  logSomething() {
    console.log("inner standard component log");
  }
}
