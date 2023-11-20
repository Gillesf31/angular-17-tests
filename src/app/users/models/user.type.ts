export type UserType = {
    readonly username: string;
    readonly age: number;
    readonly gender: 'M' | 'F';
    readonly weight: number;
    readonly height: number;
    readonly activityFactor: 1.0 | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 1.7 | 1.9;
    readonly malusSurplusPercentage: -20 | -15 | -10 | -5 | 0 | 5 | 10 | 15 | 20;
}

export type UserWithCaloriesType = UserType & {caloriesIntake: number};
