import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from './services/api.service';
import { RepositoryModel } from './models/repository.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    githubLink = 'https://github.com/Godel';
    repositoryList: RepositoryModel[];
    filteredRepositoryList: RepositoryModel[];
    searchControl = new FormControl();

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.getRepositoryList().subscribe((x: RepositoryModel[]) => {
            this.repositoryList = x;
            this.filteredRepositoryList = this.repositoryList;
        });
        this.searchControl.valueChanges.subscribe((term: string) => this.onSearchTermChange(term));
    }

    onDetailsOpen(id: number): void {
        console.log(id, 'coming soon!');
    }

    onSearchTermChange(term: string): void {
        if (!term) {
            this.filteredRepositoryList = this.repositoryList;
        } else {
            this.filteredRepositoryList = this.repositoryList.filter(x =>
                x.name && x.name.toLowerCase().includes(term.toLowerCase())
                || x.language && x.language.toLowerCase().includes(term.toLowerCase())
            );
        }
    }
}
