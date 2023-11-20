import {UserService} from "./user.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import {UserType} from "../models/user.type";

describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService]
        });

        service = TestBed.inject(UserService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        const httpMock = TestBed.inject(HttpTestingController);
        httpMock.verify({
            ignoreCancelled: true,
        });
    });

    test('should be created', () => {
        expect(service).toBeTruthy();
    });

    test('should fetch users and calculate their calories intake', async() => {
        const mockUsers: UserType[] = [
            {
                username: 'User1',
                age: 20,
                gender: 'M',
                weight: 80,
                height: 160,
                activityFactor: 1.0,
                malusSurplusPercentage: -20
            },
            {
                username: 'User2',
                age: 40,
                gender: 'F',
                weight: 70,
                height: 173,
                activityFactor: 1.5,
                malusSurplusPercentage: 10
            }
        ];

        service.getUsersWithCalories().subscribe(users => {
            expect(users[0].caloriesIntake).toBe(1364);
            expect(users[1].caloriesIntake).toBe(2343);
        });

        const req = httpMock.expectOne('http://localhost:3000/users');
        expect(req.request.method).toBe('GET');
        req.flush(mockUsers);

        expect.assertions(3);
    });
});
