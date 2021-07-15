import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PersistanceServiceService } from '../persistance-service.service';
import { ShareDataService } from '../share-data.service';

@Component({
	selector: 'app-source-data',
	templateUrl: './source-data.component.html',
	styleUrls: ['./source-data.component.css']
})
export class SourceDataComponent implements OnInit {

	dataset = []
	id = 'my-custom-id';
	constructor(public shareDataService: ShareDataService, private persistanceServiceService: PersistanceServiceService) {
		shareDataService.fetchData().subscribe((resp) => {
			this.dataset = resp;
		});
	}

	tableSettings: any = {
		viewportColumnRenderingOffset: 27,
		viewportRowRenderingOffset: 'auto',
		height: 450,
		width: 924,
		maxRows: 21,
		manualRowResize: true,
		manualColumnResize: true,
		persistentState: true,
		manualRowMove: true,
		manualColumnMove: true,
		columnSorting: true,
		contextMenu: true,
		renderAllRows: false,
		allowInsertRow: true,
		allowInsertColumn: false,
		allowInvalid: true,
		allowRemoveColumn: false,
		allowRemoveRow: true,
		autoWrapCol: false,

		columns: [
			{
				data: 'movie_id',
				type: 'numeric',
				width: 40
			},
			{
				data: 'title',
				type: 'text'
			},
			{
				data: 'cast',
				type: 'numeric',
				numericFormat: {
					pattern: '0.0000'
				}
			},
			{
				data: 'crew',
				type: 'text'
			},

		],
		allowEmpty: true,
		colHeaders: ['Movie_id', 'Title', 'Cast', 'crew']
	};

	ngOnInit() {
		// fetch all data from the  local storge if dataset
		if (localStorage['dataset']) {
			this.dataset = this.persistanceServiceService.get('dataset');
		}
	}

	detectChanges = changes => {
		if (changes) {
			// save all data to local storge if the edit happends
			this.persistanceServiceService.set('dataset', this.dataset);
			return;
		}
	};
}
