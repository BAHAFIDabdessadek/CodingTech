
// 1 
let firstName:string = "Abdessadek";
let age:number =18;
let isSleep:boolean = false;

// 2 

function multi(a:number,b:number){
    return a*b;
}

// 2.1

interface IPerson{
    firstName:string,
    age:number,
    isSleep:boolean,
}

const user1:IPerson = {
    firstName:"Amine",
    age:23,
    isSleep:false
}

// 2.2

function toString(user:IPerson):string{

    return  "This is our user :"+user.firstName+
    " and his age is :"+user.age+
    ", and isSleep is "+user.isSleep; 
}

// 3.1
class Animal{

    name:string;
    species:string;

    constructor(name:string,species:string){
        this.name = name;
        this.species = species;
    }
     describe():string{
        return "animal name :"+this.name+" species:"+this.species;
    }
}
// 4.1
enum EJsemaine{
    Lundi="Lundi",
    Mardi="Mardi",
    Mercredi="Mercredi",
    Jeudi="Jeudi",
    Vendredi="Vendredi",
    Samedi="Samedi",
    Dimanche="Dimanche"
}

function semaine(day:string):string{

    if(day===EJsemaine.Samedi.toString() || day ===EJsemaine.Dimanche.toString()){
        return "week-end"
    }else{
        return "it's not day of week-end"
    }
    
}

// 5.1
let users:IPerson[] =[

    {firstName:'ahmed',age:23,isSleep:false},
    {firstName:'kamal',age:33,isSleep:true},
    {firstName:'jamal',age:20,isSleep:false},
    {firstName:'riad',age:24,isSleep:true},
] 

function generique(users:IPerson[]):IPerson{

    return users[0];
}


console.log(generique(users))
