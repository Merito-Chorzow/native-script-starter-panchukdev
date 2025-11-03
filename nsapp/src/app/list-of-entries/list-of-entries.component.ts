import { Component } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-list-of-entries',
  standalone: true,
  imports: [NativeScriptCommonModule],
  templateUrl: './list-of-entries.component.html',
  styleUrls: ['./list-of-entries.component.css'],
})
export class ListOfEntriesComponent {}