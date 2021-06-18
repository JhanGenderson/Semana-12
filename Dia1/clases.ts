interface iPlato{
    id:number,
    nombre:string,
    ingredientes:Array<string>,
    preparacion:string

    mostrarInfo():void
}

// clase, estas en ts ya pueden implementar una interface

class Platillo implements iPlato{
  private  _id:number;
  get id(){
      return this._id
  }
  public  nombre:string
  public  ingredientes:Array<string>
  public  preparacion:string

  constructor(id:number,nombre:string){
    this._id = id
    this.nombre = nombre
    this.ingredientes = []
    this.preparacion = ""
  }

    mostrarInfo(){
        console.log(`Este Platillo es ${this.nombre} y su preparacion es ${this.preparacion}`)
    }
}

let Chifa:Platillo = new Platillo(10, "Aeropuerto")

Chifa.nombre = "Tipakay"
console.log(Chifa)