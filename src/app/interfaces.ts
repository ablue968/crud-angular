export interface Persona {
        id?            : Number;
        username      : String;
        password      : String;
        name          : String;
        surname       : String;
        company_email : String;
        personal_email: String;
        active        : boolean;
        created_date?  : Date;
        imagen_url?    : String;
        deleted_date?  : Date;
}
