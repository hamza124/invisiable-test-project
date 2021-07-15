import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ShareDataService {
	dataset = [
		{
			movie_id: 121397,
			title: 'The Chronicles of Narnia: Prince Caspian',
			cast: 5.3,
			crew: 'EUR / USD',
		},
		{
			movie_id: 123394,
			title: 'avater',
			cast: 10.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 189732,
			title: 'Euro',
			cast: 20.33,
			crew: 'EUR / USD',
		},
		{
			movie_id: 202142,
			title: 'Prince Caspian',
			cast: 33,
			crew: 'EUR / USD',
		},
		{
			movie_id: 122173,
			title: 'The Lone Ranger',
			cast: 32,
			crew: 'EUR / USD',
		},
		{
			movie_id: 202133,
			title: 'hala gula ',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 199343,
			title: 'Euro',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 133293,
			title: 'oooopppyy',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 202197,
			title: 'Superman: Dawn of Justice',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 332311,
			title: 'Euro',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 199447,
			title: 'Euro',
			cast: 0.9033,
			crew: 'EUR / USD',
		},

		{
			movie_id: 189865,
			title: 'Batman v Superman: Dawn of Justice',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 278786,
			title: 'Half-Blood Prince',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 144973,
			title: 'Harry Potter and the Half-Blood Princeo',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 183197,
			title: 'Ultrono',
			cast: 0.955533,
			crew: 'EUR / USD',
		},
		{
			movie_id: 202221,
			title: 'Superman Returns',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 199337,
			title: 'John Carter',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 199197,
			title: 'The Dark Knight Rises',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 268021,
			title: 'Spectre',
			cast: 0.9033,
			crew: 'EUR / USD',
		},
		{
			movie_id: 109278,
			title: 'Pirates of the Caribbean: At World',
			cast: 0.9033,
			crew: 'EUR / USD',
		}
	];

	constructor() { }
	fetchData(): Observable<any> {
		return of(this.dataset);
	}

}
