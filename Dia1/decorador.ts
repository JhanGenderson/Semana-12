function decorador(texto:string){
    return function(target){ //target, va a representar a mi class Persona
        target.prototype.saludar = function(){
            console.log(`Buenos dias, por favor guarde la distancia de seguridad y ${texto}`)
        }
    }
}

@decorador("estoy con mascarilla")

class Persona{
    public nombre:string

    constructor(nombre:string){
        this.nombre = nombre
    }

    saludar (texto):void{
        console.log(`Hola que tal, soy ${this.nombre} ${texto}`)
    }
}

let Jhonny:Persona = new Persona("Jhonny")

Jhonny.saludar(`cuando un Dota`)