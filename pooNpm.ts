 class SistemaEducativo{
     private registroDocentes: Profesor[];
     private registroAlumnos: Alumno[];
     private estadoDocentes: boolean;

     constructor(pRegistroDocentes:Profesor[], pRegistroAlumnos:Alumno[], pEstadoDocentes:boolean){
         this.registroDocentes = pRegistroDocentes;
         this.registroAlumnos = pRegistroAlumnos;
         this.estadoDocentes = pEstadoDocentes;

     }

     verListadoDocentes():void{
         this.registroDocentes = this.registroDocentes;
     }

     verListadoAlumnos():void{
        this.registroAlumnos = this.registroAlumnos;
     }

     verEstadoDocentes():void{
         if(this.estadoDocentes === true){
             this.estadoDocentes = false;
         }else{
             this.estadoDocentes = true;
        }
     }

     contratar():void{
        this.registroDocentes = this.registroDocentes++;
 
     }
     despedir():void{
        this.registroDocentes = this.registroDocentes--;
 
     }

 }

 
 class Profesor{
    private registroAlumnos: Alumno[];
    private notasAlumnos: number;
    private estadoAlumno: string;
    

    constructor(pRegistroAlumnos:Alumno[], pNotasAlumnos:number, pEstadoAlumnos:string){
        this.registroAlumnos = pRegistroAlumnos;
        this.notasAlumnos = pNotasAlumnos;
        this.estadoAlumno = pEstadoAlumnos;

    }

    verListadoAlumnos():void{
       this.registroAlumnos = this.registroAlumnos;
    }
    verNotasAlumnos():void{
        this.notasAlumnos = this.notasAlumnos;
     }
 
    verEstadoAlumno():string{
        if(this.notasAlumnos > 7){
            this.estadoAlumno = "Aprobado";
        }else{
            this.estadoAlumno = "Desaprobado";
       }
       return this.estadoAlumno
    }

    ponerNota():void{
       this.notasAlumnos = this.notasAlumnos;

    }

}
class Alumno{
    private nombreAlumno: string;
    private apellidoAlumno: string;
    private estadoAlumno: string;
    private notaMatematicas:number; 
    private notaLengua:number;
    private notaGeografia:number; 

    constructor(pNombreAlumno:string, pApellidoAlumno:string, pEstadoAlumno:string, pNotaMatematica:number, pNotaLengua:number,pNotaGeografia:number){
        this.nombreAlumno = pNombreAlumno;
        this.apellidoAlumno = pApellidoAlumno;
        this.estadoAlumno = pEstadoAlumno;
        this.notaMatematicas = pNotaMatematica;
        this.notaLengua = pNotaLengua;
        this.notaGeografia = pNotaGeografia;
    }

    verNotas():void{
        this.notaMatematicas = this.notaMatematicas;
        this.notaLengua = this.notaLengua;
        this.notaGeografia = this.notaGeografia;
    }

    // verEstadoAlumno():void{
    //    this.estadoAlumno = this.estadoAlumno;
    // }
    verEstadoAlumno():string{
        if(this.notaMatematicas > 7 || this.notaGeografia > 7 || this.notaGeografia > 7){
            this.estadoAlumno = "Aprobado";
        }else{
            this.estadoAlumno = "Desaprobado";
       }
       return this.estadoAlumno
    }


}

let primerAlumno: Alumno = new Alumno("Mario","Schmoker","Aprovado",8,9,10); 
console.log(primerAlumno);  



// let primerAuto = new Auto(true,true,120);
// let velocidadDelPrimerauto:number = primerAuto.obtenerVelocidad();
// console.log(velocidadDelPrimerauto, " km/h");
// let segundoAuto = new Auto(true,true,80);
// console.log(segundoAuto);