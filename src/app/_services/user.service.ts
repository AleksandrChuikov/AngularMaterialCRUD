import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../_models";

@Injectable()
export class UserService{

    private url = "https://crud-angular6.azurewebsites.net/backend";

    constructor(private http: HttpClient){ }

    getUsers(){
        return this.http.get<User[]>(`${this.url}/api/allUsers/`);
    }

    createUser(user: User){
        return this.http.post(`${this.url}/api/create`, user);
    }

    updateUser(id: number, user: User) {
        return this.http.post(`${this.url}/api/update`, user);
    }

    deleteUser(id: number){
        return this.http.delete(`${this.url}/api/delete/${id}`);
    }
}
