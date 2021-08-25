export interface Persona {
        id?            : number;
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
