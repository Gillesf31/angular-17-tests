import {UserType} from "../models/user.type";

export function calculateMifflin(weight: number, height: number, age: number, gender: 'M' | 'F') {
    const weightOperation = 10 * weight;
    const heightOperation = 6.25 * height;
    const ageOperation = 5 * age;
    const genderOperation = gender === 'M' ? 5 : -161;
    return weightOperation + heightOperation - ageOperation + genderOperation;
}

export function calculateMaintenance({age, height, weight, gender, activityFactor}: UserType) {
    return calculateMifflin(weight, height, age, gender) * activityFactor;
}

export function calculateCalories(user: UserType) {
    return Math.floor(calculateMaintenance(user) * (1 + user.malusSurplusPercentage / 100));
}
