export class RepositoryModel {
    public id: number;
    public name: string;

    public constructor(fields?: Partial<RepositoryModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}