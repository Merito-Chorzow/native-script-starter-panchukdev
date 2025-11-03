import { Component } from "@angular/core";
import { NativeScriptCommonModule } from '@nativescript/angular';

// settings.component.ts
@Component({
  selector: 'ns-settings',
  standalone: true,
  imports: [NativeScriptCommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {}