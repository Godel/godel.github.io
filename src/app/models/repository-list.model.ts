export class RepositoryListModel {
    public id: number;
    public name: string;

    public constructor(fields?: Partial<RepositoryListModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}