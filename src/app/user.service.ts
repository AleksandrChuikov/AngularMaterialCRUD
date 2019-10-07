import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {User} from './user';
   
@Injectable()
export class UserService{
   
    private url = "https://apialex.azurewebsites.net";

    constructor(private http: HttpClient){ }
      
    getUsers(){
        let getUrl = this.url + "/api/all/";
        return this.http.get(getUrl);
    }
  
    createUser(user: User){
        let saveUrl = this.url + "/api/Users";
        return this.http.post(saveUrl, user); 
    }
    updateUser(id: number, user: User) {
        const urlParams = new HttpParams().set("id", id.toString());
        return this.http.post(this.url + "/api/update", user);
    }
    deleteUser(id: number){
        const urlParams = new HttpParams().set("id", id.toString());
        return this.http.delete(this.url + "/api/delete/" + id);
    }
}