 class SistemaEducativo{
     private establecimiento: string;
     private registroDocentes: Profesor[];
     private registroAlumnos: Alumno[];

     constructor( pEstablecimiento:string,pRegistroDocentes:Profesor[], pRegistroAlumnos:Alumno[]){
         this.establecimiento = pEstablecimiento;
         this.registroDocentes = pRegistroDocentes;
         this.registroAlumnos = pRegistroAlumnos;

     }

     
     cargarEstablecimineto():void{
         this.establecimiento = this.establecimiento;
        }
        
     verListadoDocentes():void{
            this.registroDocentes = this.registroDocentes;
        }
        
     verListadoAlumnos():void{
            this.registroAlumnos = this.registroAlumnos;
        }
        
     contratarProfesor(nuevoDocente:Profesor):void{
            this.registroDocentes.push(nuevoDocente);
 
        }
     despedirProfesor(despedirDocente:Profesor):void{
            for(let i:number=0; i<this.registroDocentes.length; i++){
                if(despedirDocente.getApellidoProfesor() === this.registroDocentes[i].getApellidoProfesor()){
                    this.registroDocentes.splice(i,1);
                }else{
                    console.log("No se encontro Profesor");
                }
            }
            
        }
        
    }
    
    
    class Profesor{
        private nombreProfesor: string;
        private apellidoProfesor: string;
        private materia: string;
        private registroAlumnos: Alumno[];
        private notasAlumnos: number;
        private estadoAlumno: string;
    
    
    constructor(pnombreProfesor:string,papellidoProfesor:string,pmateria:string,pRegistroAlumnos:Alumno[],){
        this.nombreProfesor = pnombreProfesor;
        this.apellidoProfesor = papellidoProfesor;
        this.materia = pmateria;
        this.registroAlumnos = pRegistroAlumnos;
        
    }
    
     public getApellidoProfesor():string{
       return this.apellidoProfesor;
    }

     ingresoProfesor():void{
        this.nombreProfesor = this.nombreProfesor;
        this.apellidoProfesor = this.apellidoProfesor;
        this.materia = this.materia;
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

    inscribirAlumno():void{
        this.nombreAlumno = this.nombreAlumno;
        this.apellidoAlumno = this.apellidoAlumno;
    }

    verNotas():void{
        this.notaMatematicas = this.notaMatematicas;
        this.notaLengua = this.notaLengua;
        this.notaGeografia = this.notaGeografia;
    }

    verEstadoAlumno():string{
        if(this.notaMatematicas > 7 || this.notaGeografia > 7 || this.notaGeografia > 7){
            this.estadoAlumno = "Aprobado";
        }else{
            this.estadoAlumno = "Desaprobado";
       }
       return this.estadoAlumno
    }


}

let primerAlumno: Alumno = new Alumno("Juan","Gomez","Aprovado",8,9,9); 
let segundoAlumno: Alumno = new Alumno("Marta","Gimenez","Aprovado",9,8,10); 
let tercerAlumno: Alumno = new Alumno("Raul","Lopez","Desaprobado",7,5,6); 
let cuartoAlumno: Alumno = new Alumno("Alicia","Carrizo","Desaprobado",6,7,7); 

let registroAlumnos: Alumno[] = [primerAlumno,segundoAlumno,tercerAlumno,cuartoAlumno];

let primerProfesor: Profesor = new Profesor("Carlos","Duarte","Matematicas",registroAlumnos);
let segundoProfesor: Profesor = new Profesor("Maria","Almiron","lengua",registroAlumnos);
let tercerProfesor: Profesor = new Profesor("Omar","Patiño","Geografia",registroAlumnos);

let registroDocentes: Profesor[] = [primerProfesor,segundoProfesor,tercerProfesor];

let primerEstablecimiento = new SistemaEducativo("Escuela n°:2",registroDocentes,registroAlumnos);



console.log(primerAlumno);

console.log(segundoAlumno.verEstadoAlumno());
console.log(tercerAlumno.verEstadoAlumno());

console.log(registroDocentes);

console.log(primerEstablecimiento.contratarProfesor(new Profesor("Leticia","Gardel","Biología",registroAlumnos)));
console.log(primerEstablecimiento.contratarProfesor(new Profesor("Ruben","Garcia","Ingles",registroAlumnos)));

console.log(registroDocentes);

console.log(primerEstablecimiento.despedirProfesor(primerProfesor));

console.log(registroDocentes);

