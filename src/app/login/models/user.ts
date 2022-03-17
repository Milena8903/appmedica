export interface Usuario {
    name?: string;
    email: string;
    password: string;
}

export interface UsuarioResponse {
    msg:string,
    token?:boolean;
}