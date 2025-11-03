import { Component } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ListOfEntriesComponent } from './list-of-entries/list-of-entries.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'ns-app',
  standalone: true,
  imports: [NativeScriptCommonModule, ListOfEntriesComponent, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentIndex = 0;

  switchTab(index: number) {
    this.currentIndex = index;
  }
}