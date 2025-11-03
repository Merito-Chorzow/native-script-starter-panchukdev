import { Component } from "@angular/core";
import { NativeScriptCommonModule } from '@nativescript/angular';

// entry-details.component.ts
@Component({
  selector: 'ns-entry-details',
  standalone: true,
  imports: [NativeScriptCommonModule],
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css'],
})
export class EntryDetailsComponent {}