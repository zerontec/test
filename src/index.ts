console.log("Hola leo")



// funciones functions
/**
 * 
 * Funcion que muestra un saludo por consola 
 */

function saludar (){

    let nombre = "Leo"
    console.log(`hola ${nombre}`)
}

saludar();

/**
 * 
 * @param nombre nombre de la persona 
 */

function saludarpersona(nombre:string){

console.log(`hola ${nombre}`)

}

const persona = 'Leoberto'    
saludarpersona(persona)     // se pasan por valor los mas complejos por referencias 
 

/**
 * 
 * @param nombre 
 */
function despedirPersona(nombre:string = 'leo'){

    console.log(`adios ${nombre}`)


}

despedirPersona() // Adios leo
despedirPersona('Alba') //adios Alba 

/**
 * * el nombre es opcional
 * @param nombre 
 */

function despedidaOpcional(nombre?:string){ // el parametro nombre seria opcional 
if(nombre){

    console.log(`Adios${nombre}`)
}else{
    console.log('Adios ')
}

}

 despedidaOpcional()
 despedidaOpcional('leo');



 function variosParams(nombre:string, apellidos?:string, edad:number = 18){
    if(apellidos){
    console.log(`${nombre} ${apellidos} tiene ${edad}años`)
    }else{
        console.log(`${nombre} tiene ${edad} años`)
    }
 }

 variosParams('zeron')
 variosParams('Zeron', 'ledezma')
 variosParams('Leo',undefined, 44)
 variosParams('Zeron', 'ledezma',43)
 variosParams(nombre = 'leo', apellidos='zeron', edad=43)


/**
 * * varios tipos 
 * @param a 
 */

 function ejemploVariosTipos(a: string | number ){
if(typeof(a) === 'string'){
console.log('es un string')
}else if(typeof(a)=== 'number'){
    console.log(' es un number')
}else{
console.log('A no es un string ni tampoco un number ')
throw Error('A no es un string ni un numero ')
}


 }


 ejemploVariosTipos('hola')
 ejemploVariosTipos(9)

 /**
  * 
  * @param nombre  nombre de la persona
  * @param apellido Apellido de la persona 
  * @returns Retorna nombre y apellido 
  */

 function ejemploReturn(nombre: string, apellido:string):string | number{
return`${nombre} ${apellido}`

 }

const nombreCompleto = ejemploReturn('Leo', 'Zeron')

console.log(nombreCompleto)
console.log(ejemploReturn('leo', 'zeron'))


function ejemploMultiParams(...nombres:string[]){
    nombres.forEach(nombre)=>{
        console.log(nombre)
    }

ejemploMultiParams('leo')
ejemploMultiParams('leo', 'lis', 'wuil')
const lista = ['leo', 'lis']
ejemploMultiParams(...lista)


function ejemploParalista(nombres:string[]){
    nombres.forEach(nombre)=>{
        console.log(nombre)
    }
}

ejemploParalista(lista)



// arow function


type Empleado ={
    nombre:string
    apellidos:string
    edad: number

}



let empleadoMartin: Empleado = {

    nombre:"martin",
    apellidos:'zeron',
    edad:25
}

const mostrarEmpleado =(empleado:Empleado)=> `${empleado.nombre} tiene ${empleado.edad} años`

mostrarEmpleado(empleadoMartin)



const datosEmpleados = (empleado:Empleado):string => {
     if(empleado.edad > 70){
return ` Empleado ${empleado.nombre} esta en edad de jubilacion`

     }else{

        return `Empleado ${empleado.nombre} esta en edad laboral`
     }

}

datosEmpleados(empleadoMartin)

const obtenerSalario =(empleado:Empleado, cobrar:()=> 'cobrar'  ) => {
    if(empleado.edad > 70){
        return        
             }else{
        
               cobrar();
             }

} 

const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`)

}

// const cobrarSalario = () => {
//     console.log('Cobrar nomina de empleado ')

// }

obtenerSalario(empleadoMartin, () => 'cobrar martin')



//async Functions

async function ejemploAsync() {
await console.log('va de volver una promesa')


}

//generadas generator

function *ejemploGenerator(){
 
    //yield

}