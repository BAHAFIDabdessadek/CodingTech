
interface Model{
    id:number;
}


interface User extends Model{
    name:string;
    email:string;

}
interface Product extends Model{
    name:string;
    price:number;
}




class Repository<T extends Model>{

   private items:T[]=[];

   create(item:T):T | string {

    let index = this.items.findIndex(it => it.id === item.id);

    if(index !== -1)
        return "Id already exists."

    this.items.push(item);
    return item;

   }
 

   read(id:number): T | undefined{
    
    return this.items.find(item => item.id == id);

   }

   update(id:number,item:Partial<T>):T | undefined {

    let index = this.items.findIndex(item => item.id === id);

    if(index === -1)
        return undefined;
    
    let currentItem = this.items[index];
    const newItem = {
        ...currentItem,...item
    }
    
     this.items[index] = newItem;

    return newItem;


   }

   delete(id:number):T[] | undefined{

    let index = this.items.findIndex(item => item.id === id);

    if(index === -1)
        return undefined;
    
    return this.items.splice(index,1);
   }

   getAll():T[]{
    return this.items;
   }

}
const  repoUser =new Repository<User>();
const  repoProduct =new Repository<Product>();

const user:User = {
    id:1,
    name:"ahmed",
    email:"ahmed@gmail.com"
}
const user2:User = {
    id:2,
    name:"kamal",
    email:"kaml@gmail.com"
}
const product:Product={
    id:2,
    name:"Bag",
    price:340
}
// create 
let x = repoUser.create(user);
console.log(x);
// console.log(repoUser.create(user2));
repoProduct.create(product);

// console.log(repoUser.getAll());
// // console.log(repoProduct.getAll());

// // update

// let user1u:Partial<User>={
    
//     email:"saad@gmail.com"
// };

// console.log("After update : ",repoUser.read(1));
// console.log(repoUser.update(1,{email:"saad@gmail.com"}));

// // delete

// repoUser.delete(1);
// console.log("before delete : ",repoUser.read(1));


