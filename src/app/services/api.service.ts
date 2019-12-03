import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from './base-api.service';
import { RepositoryListModel } from '../models/repository-list.model';

@Injectable()
export class ApiService extends BaseApiService {
    constructor(protected http: HttpClient) {
        super(http);

    }
    getRepositoryList(): Observable<any> {
        return this.httpGet('orgs/godel/repos', x => new RepositoryListModel(x));
    }
}