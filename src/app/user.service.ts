import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {User} from './user';
   
@Injectable()
export class UserService{
   
    private url = "https://crud-angular6.azurewebsites.net/backend";

    constructor(private http: HttpClient){ }
      
    getUsers(){
        let getUrl = `${this.url}/api/allUsers/`;
        return this.http.get(getUrl);
    }
  
    createUser(user: User){
        let saveUrl = `${this.url}/api/create`;
        return this.http.post(saveUrl, user); 
    }
    
    updateUser(id: number, user: User) {
        return this.http.post(`${this.url}/api/update`, user);
    }

    deleteUser(id: number){
        return this.http.delete(`${this.url}/api/delete/${id}`);
    }
}