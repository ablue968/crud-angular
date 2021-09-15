export type Roles = 'PERSONA' | 'STUDENT';

export interface Persona {
        id?           : number;
        username      : string;
        password      : string;
        name          : string;
        surname       : string;
        company_email : string;
        personal_email: string;
        active        : boolean;
        created_date  : Date | null;
        imagen_url    : string | null;
        deleted_date  : Date | null;
}

export interface PersonaUpdate {
        username      : string;
        password      : string;
        name          : string;
        surname       : string;
        company_email : string;
        personal_email: string;
        active        : boolean;
        created_date  : Date | null;
        imagen_url    : string | null;
        deleted_date  : Date | null;
}

export interface User{
        email: string;
        password: string;
}

export interface UserResponse {
        message: string;
        token: string;
        userId: number;
        role: Roles;
}
