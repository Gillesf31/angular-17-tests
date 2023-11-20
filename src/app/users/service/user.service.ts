import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UserType, UserWithCaloriesType} from "../models/user.type";
import {calculateCalories} from "./user.util";

@Injectable()
export class UserService {
    private readonly httpClient = inject(HttpClient);

    private getUsers(): Observable<UserType[]> {
        return this.httpClient.get<UserType[]>('http://localhost:3000/users')
    }

    public getUsersWithCalories(): Observable<UserWithCaloriesType[]> {
        return this.getUsers().pipe(
            map(users =>
                users.map(user => ({...user, caloriesIntake: calculateCalories(user)}))
            )
        );
    }
}
