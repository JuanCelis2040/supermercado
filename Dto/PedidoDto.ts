class Pedido {
    private _idProducto: number;
    private _direccion: string;
    private _nombreUsuario: string;
    private _email: string;
    private _estado: string;
    constructor(
        idProducto: number, direccion:string,
        nombreUsuario:string, email:string,
        estado:string
    ){
        this._idProducto = idProducto;
        this._direccion = direccion;
        this._nombreUsuario = nombreUsuario;
        this._email = email;
        this._estado = estado
    }
    //getters 
    get idProducto(){
        return this._idProducto
    }
    get direccion(){
        return this._direccion
    }
    get nombreUsuario(){
        return this._nombreUsuario
    }
    get email(){
        return this._email
    }

    get estado(){
        return this._estado
    }

    //setters
    set idProducto(idProducto:number){
        this._idProducto = idProducto;
    }
    set direccion(direccion:string){
        this._direccion = direccion;
    }
    set nombreUsuario(nombreUsuario:string){
        this._nombreUsuario = nombreUsuario;
    }
    set email(email:string){
        this._email = email;
    }

    set estado(estado:string){
        this._estado = estado
    }

}
export default Pedido