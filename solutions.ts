const multiplyValue = (value : number, multiplier?: number): number => {
    if(multiplier === undefined){
        return value * 2;
    }
    return value * multiplier;
};

const processInput = (value: string | number | boolean): string | number => {
    if(typeof value === "string"){
        return value.trim().toLowerCase(); 
    }
    
    if(typeof value === "number"){
        return value * 10;
    }

    if(value === true){
        return "Active";
    }
    else{
        return "Inactive";
    }
};

const formatCoordinate = (coordinate: readonly[number, number, string]): string => {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const combined: T[] = [];

    for(const currentArray of arrays) {
        for(const item of currentArray) {
            combined.push(item);
        }
    }
    return combined;
};

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const popularCourses: Course[] = [];

    for(const course of courses) {
        if(course.isPublished === true && course.students >= minStudents){
            popularCourses.push(course);
        }
    }
    return popularCourses;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const values: T[K][] = [];

    for (const item of items) {
        values.push(item[key]);
    }

    return values;
};

class Employee {
    constructor(
        protected name: string,
        private baseSalary: number
    ){}

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string
    ){
        super(name, baseSalary);
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
};


const validateAgeAsync = async (age: number): Promise<string> => {
    if(age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }

    return new Promise<string>((resolve: (value: string) => void): void => {
        setTimeout((): void => {
            resolve("Access Granted");
        }, 1000);
    });
};