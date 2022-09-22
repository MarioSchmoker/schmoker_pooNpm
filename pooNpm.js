var SistemaEducativo = /** @class */ (function () {
    function SistemaEducativo(pRegistroDocentes, pRegistroAlumnos, pEstadoDocentes) {
        this.registroDocentes = pRegistroDocentes;
        this.registroAlumnos = pRegistroAlumnos;
        this.estadoDocentes = pEstadoDocentes;
    }
    SistemaEducativo.prototype.verListadoDocentes = function () {
        this.registroDocentes = this.registroDocentes;
    };
    SistemaEducativo.prototype.verListadoAlumnos = function () {
        this.registroAlumnos = this.registroAlumnos;
    };
    SistemaEducativo.prototype.verEstadoDocentes = function () {
        if (this.estadoDocentes === true) {
            this.estadoDocentes = false;
        }
        else {
            this.estadoDocentes = true;
        }
    };
    SistemaEducativo.prototype.contratar = function () {
        this.registroDocentes = this.registroDocentes++;
    };
    SistemaEducativo.prototype.despedir = function () {
        this.registroDocentes = this.registroDocentes--;
    };
    return SistemaEducativo;
}());
var Profesor = /** @class */ (function () {
    function Profesor(pRegistroAlumnos, pNotasAlumnos, pEstadoAlumnos) {
        this.registroAlumnos = pRegistroAlumnos;
        this.notasAlumnos = pNotasAlumnos;
        this.estadoAlumno = pEstadoAlumnos;
    }
    Profesor.prototype.verListadoAlumnos = function () {
        this.registroAlumnos = this.registroAlumnos;
    };
    Profesor.prototype.verNotasAlumnos = function () {
        this.notasAlumnos = this.notasAlumnos;
    };
    Profesor.prototype.verEstadoAlumno = function () {
        if (this.notasAlumnos > 7) {
            this.estadoAlumno = "Aprobado";
        }
        else {
            this.estadoAlumno = "Desaprobado";
        }
        return this.estadoAlumno;
    };
    Profesor.prototype.ponerNota = function () {
        this.notasAlumnos = this.notasAlumnos;
    };
    return Profesor;
}());
var Alumno = /** @class */ (function () {
    function Alumno(pNombreAlumno, pApellidoAlumno, pEstadoAlumno, pNotaMatematica, pNotaLengua, pNotaGeografia) {
        this.nombreAlumno = pNombreAlumno;
        this.apellidoAlumno = pApellidoAlumno;
        this.estadoAlumno = pEstadoAlumno;
        this.notaMatematicas = pNotaMatematica;
        this.notaLengua = pNotaLengua;
        this.notaGeografia = pNotaGeografia;
    }
    Alumno.prototype.verNotas = function () {
        this.notaMatematicas = this.notaMatematicas;
        this.notaLengua = this.notaLengua;
        this.notaGeografia = this.notaGeografia;
    };
    // verEstadoAlumno():void{
    //    this.estadoAlumno = this.estadoAlumno;
    // }
    Alumno.prototype.verEstadoAlumno = function () {
        if (this.notaMatematicas > 7 || this.notaGeografia > 7 || this.notaGeografia > 7) {
            this.estadoAlumno = "Aprobado";
        }
        else {
            this.estadoAlumno = "Desaprobado";
        }
        return this.estadoAlumno;
    };
    return Alumno;
}());
var primerAlumno = new Alumno("Mario", "Schmoker", "Aprovado", 8, 9, 10);
console.log(primerAlumno);
// let primerAuto = new Auto(true,true,120);
// let velocidadDelPrimerauto:number = primerAuto.obtenerVelocidad();
// console.log(velocidadDelPrimerauto, " km/h");
// let segundoAuto = new Auto(true,true,80);
// console.log(segundoAuto);
