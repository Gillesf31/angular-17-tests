import {calculateCalories, calculateMaintenance, calculateMifflin} from "./user.util";
import {UserType} from "../models/user.type";

describe('UserUtil', () => {
    describe('calculateMifflin', () => {
        test('with weight of 80kg and height of 180cm, should return 800', () => {
            expect(calculateMifflin(80, 180, 22, 'M')).toEqual(1820);
        })
        test('with weight of 70kg and height of 150cm, should return 700', () => {
            expect(calculateMifflin(70, 150, 16, 'F')).toEqual(1396.5);
        })
    })
    const users: UserType[] = [
        {
            username: "Toto",
            age: 62,
            gender: "F",
            weight: 63,
            height: 166,
            activityFactor: 1.0,
            malusSurplusPercentage: -10
        },
        {
            username: "Tata",
            age: 32,
            gender: "F",
            weight: 86,
            height: 172,
            activityFactor: 1.9,
            malusSurplusPercentage: 10
        },
        {
            username: "Tutu",
            age: 33,
            gender: "F",
            weight: 88,
            height: 171,
            activityFactor: 1.4,
            malusSurplusPercentage: -20
        },
        {
            username: "Tyty",
            age: 51,
            gender: "F",
            weight: 68,
            height: 187,
            activityFactor: 1.9,
            malusSurplusPercentage: 0
        },
        {
            username: "Tete",
            age: 69,
            gender: "F",
            weight: 73,
            height: 176,
            activityFactor: 1.7,
            malusSurplusPercentage: -10
        },
        {
            username: "Nono",
            age: 56,
            gender: "M",
            weight: 72,
            height: 195,
            activityFactor: 1.4,
            malusSurplusPercentage: 0
        },
        {
            username: "Nene",
            age: 50,
            gender: "F",
            weight: 89,
            height: 197,
            activityFactor: 1.2,
            malusSurplusPercentage: 10
        },
        {
            username: "Nunu",
            age: 65,
            gender: "F",
            weight: 98,
            height: 178,
            activityFactor: 1.7,
            malusSurplusPercentage: 15
        },
        {
            username: "Nini",
            age: 47,
            gender: "F",
            weight: 99,
            height: 164,
            activityFactor: 1.4,
            malusSurplusPercentage: -5
        },
        {
            username: "Nyny",
            age: 61,
            gender: "F",
            weight: 55,
            height: 191,
            activityFactor: 1.7,
            malusSurplusPercentage: 20
        }
    ]

    describe('calculateMaintenance', () => {
        test.each(users)('with user %s, should return %i', (user) => {
            expect(calculateMaintenance(user)).toEqual(calculateMifflin(user.weight, user.height, user.age, user.gender) * user.activityFactor);
        })
    })

    describe('calculateCalories', () => {
        test.each(users)('with user %s, should return %i', (user) => {
            expect(calculateCalories(user)).toEqual(Math.floor(calculateMaintenance(user) + (calculateMaintenance(user) * user.malusSurplusPercentage / 100)));
        })
    })
})
