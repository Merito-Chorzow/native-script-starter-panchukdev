import { Routes } from "@angular/router";
import { ListOfEntriesComponent } from "./list-of-entries/list-of-entries.component";
import { EntryDetailsComponent } from "./entry-details/entry-details.component";
import { SettingsComponent } from "./settings/settings.component";

export const routes: Routes = [
  { path: "", redirectTo: "/entries", pathMatch: "full" },
  { path: "entries", component: ListOfEntriesComponent },
  { path: "entry/:id", component: EntryDetailsComponent },
  { path: "settings", component: SettingsComponent },
];