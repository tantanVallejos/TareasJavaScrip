
export class Todo{

        static  FromJson({id,tarea,completado,creado}){

            const tempTodo = new Todo(tarea); // crear una instancia


            tempTodo.id          = id;
            tempTodo.completado  = completado;
            tempTodo.creado      = creado;
           
            return tempTodo;
        }

    constructor( tarea ){

        this.tarea = tarea;

        this.id        = new Date().getTime();
        this.completado = false;
        this.creado    = new Date();


     

    }

    imprimirClass(){
       console.log(`${ this.tarea}- ${this.id}`);     
     }
} 
