import { Component, OnInit } from '@angular/core';

import { ApiService } from './services/api.service';
import { RepositoryModel } from './models/repository.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    repositoryList: RepositoryModel[];

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.getRepositoryList().subscribe((x: RepositoryModel[]) => this.repositoryList = x);
    }

    onDetailsOpen(id: number): void {
        console.log(id, "coming soon!");
    }
}