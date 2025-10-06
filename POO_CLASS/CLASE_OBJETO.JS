class PASAJERO{
    // ATRIBUTOS DE LA CLASE
    nombre = "";
    edad = 0
    genero = "";
    tipo_boleto = "";

    //CONSTRUCTOR
    constructor(paramNombre, paramEdad, paramGenero, paramTipoBoleto){
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.genero = paramGenero;
        this.tipo_boleto = paramTipoBoleto;
    }

    //setters
    SetNombre(paramNombre){ this.nombre = paramNombre;}
    SetEdad(paramEdad){ this.edad = paramEdad;}
    SetGenero(paramGenero){ this.genero = paramGenero;}
    SetTipoBoleto(paramTipoBoleto){ this.tipo_boleto = paramTipoBoleto;} 
    
    //getter
    GetNombre(){ return this.nombre;}
    GetEdad(){ return this.edad;}
    GetGenero(){ return this.genero;}
    GetTipoBoleto(){ return this.tipo_boleto;}

    //mostrar los calores de los atributos
    ToString(){
        return "pasajero: " + this.GetNombre() +
            "Edad: " + this.GetEdad() + 
            "Genero: " + this.GetGenero() + 
            "Tipo de Boleto: " + this.GetTipoBoleto();
    }
    
}