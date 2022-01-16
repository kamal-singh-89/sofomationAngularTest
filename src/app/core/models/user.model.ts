export interface IUser {
    fields: IUserObject,
    createdTime?: Date;
    id?: string;
    offset?: string;
}

export interface IUsersListResponse {
    records: IUser[];
}

export interface IUserObject {
    'First Name'?: string;
    'Last Name': string;
    'Date of Birth': string | null;
    Status: string;
    Gender: string;
}