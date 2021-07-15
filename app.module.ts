import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotTableModule } from '@handsontable/angular';
import { SourceDataComponent } from './source-data/source-data.component';

@NgModule({
	declarations: [
		AppComponent,
		SourceDataComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HotTableModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
