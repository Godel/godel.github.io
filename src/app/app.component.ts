import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { RepositoryListModel } from './models/repository-list.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    repositoryList: RepositoryListModel[];

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.getRepositoryList().subscribe((x: RepositoryListModel[]) => console.log(x));
    }
}