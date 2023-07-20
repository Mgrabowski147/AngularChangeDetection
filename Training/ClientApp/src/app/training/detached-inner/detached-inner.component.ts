import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-detached-inner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detached-inner.component.html',
  styleUrls: ['./detached-inner.component.css']
})
export class DetachedInnerComponent {
  constructor(public sharedService: SharedService,
    private cdr:ChangeDetectorRef) {
      this.cdr.detach();
    }
}
