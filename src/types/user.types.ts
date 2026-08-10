export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    phone: string;
    avatar: string;
    role: "user" | "admin";
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    
    createdAt: string;
    updatedAt: string;
}