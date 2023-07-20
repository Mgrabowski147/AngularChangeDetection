import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-lifecycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-lifecycle.component.html',
  styleUrls: ['./all-lifecycle.component.css']
})
export class AllLifecycleComponent {

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked()	{
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit()	{
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked()	{
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy()	{
    console.log("ngOnDestroy");
  }

  onChangeDetection() {
    console.log("-- change detection --");
    return Math.random();
  }

  doNothing() {

  }
}
