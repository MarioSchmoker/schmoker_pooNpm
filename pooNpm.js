var SistemaEducativo = /** @class */ (function () {
    function SistemaEducativo(pEstablecimiento, pRegistroDocentes, pRegistroAlumnos) {
        this.establecimiento = pEstablecimiento;
        this.registroDocentes = pRegistroDocentes;
        this.registroAlumnos = pRegistroAlumnos;
    }
    SistemaEducativo.prototype.cargarEstablecimineto = function () {
        this.establecimiento = this.establecimiento;
    };
    SistemaEducativo.prototype.verListadoDocentes = function () {
        this.registroDocentes = this.registroDocentes;
    };
    SistemaEducativo.prototype.verListadoAlumnos = function () {
        this.registroAlumnos = this.registroAlumnos;
    };
    SistemaEducativo.prototype.contratarProfesor = function (nuevoDocente) {
        this.registroDocentes.push(nuevoDocente);
    };
    SistemaEducativo.prototype.despedirProfesor = function (despedirDocente) {
        for (var i = 0; i < this.registroDocentes.length; i++) {
            if (despedirDocente.getApellidoProfesor() === this.registroDocentes[i].getApellidoProfesor()) {
                this.registroDocentes.splice(i, 1);
            }
            else {
                console.log("No se encontro Profesor");
            }
        }
    };
    return SistemaEducativo;
}());
var Profesor = /** @class */ (function () {
    function Profesor(pnombreProfesor, papellidoProfesor, pmateria, pRegistroAlumnos) {
        this.nombreProfesor = pnombreProfesor;
        this.apellidoProfesor = papellidoProfesor;
        this.materia = pmateria;
        this.registroAlumnos = pRegistroAlumnos;
    }
    Profesor.prototype.getApellidoProfesor = function () {
        return this.apellidoProfesor;
    };
    Profesor.prototype.ingresoProfesor = function () {
        this.nombreProfesor = this.nombreProfesor;
        this.apellidoProfesor = this.apellidoProfesor;
        this.materia = this.materia;
    };
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
    Alumno.prototype.inscribirAlumno = function () {
        this.nombreAlumno = this.nombreAlumno;
        this.apellidoAlumno = this.apellidoAlumno;
    };
    Alumno.prototype.verNotas = function () {
        this.notaMatematicas = this.notaMatematicas;
        this.notaLengua = this.notaLengua;
        this.notaGeografia = this.notaGeografia;
    };
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
var primerAlumno = new Alumno("Juan", "Gomez", "Aprovado", 8, 9, 9);
var segundoAlumno = new Alumno("Marta", "Gimenez", "Aprovado", 9, 8, 10);
var tercerAlumno = new Alumno("Raul", "Lopez", "Desaprobado", 7, 5, 6);
var cuartoAlumno = new Alumno("Alicia", "Carrizo", "Desaprobado", 6, 7, 7);
var registroAlumnos = [primerAlumno, segundoAlumno, tercerAlumno, cuartoAlumno];
var primerProfesor = new Profesor("Carlos", "Duarte", "Matematicas", registroAlumnos);
var segundoProfesor = new Profesor("Maria", "Almiron", "lengua", registroAlumnos);
var tercerProfesor = new Profesor("Omar", "Patiño", "Geografia", registroAlumnos);
var registroDocentes = [primerProfesor, segundoProfesor, tercerProfesor];
var primerEstablecimiento = new SistemaEducativo("Escuela n°:2", registroDocentes, registroAlumnos);
console.log(primerAlumno);
console.log(segundoAlumno.verEstadoAlumno());
console.log(tercerAlumno.verEstadoAlumno());
console.log(registroDocentes);
console.log(primerEstablecimiento.contratarProfesor(new Profesor("Leticia", "Gardel", "Biología", registroAlumnos)));
console.log(primerEstablecimiento.contratarProfesor(new Profesor("Ruben", "Garcia", "Ingles", registroAlumnos)));
console.log(registroDocentes);
console.log(primerEstablecimiento.despedirProfesor(primerProfesor));
console.log(registroDocentes);
