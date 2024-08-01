
interface Model{
    id:number;
    createAt?:Date;
    updateAt?:Date;


    
}

interface Post extends Model{
    titre:string;
    content:string;
    authorId:number;
    

}

interface User extends Model{
    name:string
    idPosts?:number[];

    

}

class Repository<T extends Model>{
    
    private _items:T[]=[]

    get items():T[]{
        return this._items;
    }

    set items(item:T){
        this._items.push(item);
    }

   
    

    create(eItem:T):T |string{

    const checkIndex = this._items.findIndex(item => item.id === eItem.id);
    
    if(checkIndex !== -1)
        return "Sorry, Id already used! try another one."

    eItem.createAt = new Date();
    this._items.push(eItem);
    
    return eItem;

    }
    read(id:number):T | string{

        const checkIndex = this._items.findIndex(item => item.id === id);
        
        if(checkIndex === -1)
            return "Sorry, We can not found any item with id you entred!";

        return this._items[checkIndex];

    }

    update(id:number,eItem:Partial<T>): string | T {

        const checkIndex = this._items.findIndex(item => item.id === id);

        if(checkIndex === -1)
            return "Sorry, we can not found any item with id you are entred!"

        let currentItem = this._items[checkIndex];

        const newItem = {
            ...currentItem,...eItem
        };

        newItem.updateAt = new Date();
        this._items[checkIndex] = newItem;
        
        return newItem;
        
    }

    delete(id:number): string{

        const checkIndex = this._items.findIndex(item => item.id === id);
        
        if(checkIndex === -1)
            return "Sorry, We can not found any item with id you entred!";

        this._items.splice(checkIndex,1);
        return  "DELETED WITH SUCCESS!";
    }
   
   
    checkAuthor(id:number):boolean{
     
        const index = this._items.findIndex(x => x.id === id)

        if(index === -1)
            return false;

        return true;
    }

}


class PostRepository extends Repository<Post>{

        constructor(private userRepo:Repository<User>){
        super();
    }

   
    create(eItem: Post): Post | string {
        
        if(!this.userRepo.checkAuthor(eItem.authorId))
            return "Sorry, we can not add that item cause the athor not found."
        
        const checkIndex = this.items.findIndex(item => item.id === eItem.id);
    
        if(checkIndex !== -1)
            return "Sorry, Id already used! try another one."
    
        eItem.createAt = new Date();
        this.items.push(eItem);
        
        
        

        
        this.userRepo.update(eItem.authorId,{idPosts:[eItem.authorId] });
        return eItem;
    }




   


}
let userRepo = new Repository<User>();
let postRepo = new PostRepository(userRepo);

const user1:User = {
    id:1,
    name:"Abdessadek"
}
const user2:User = {
    id:2,
    name:"Saad"
}


const post1:Post = {
    id:1,
    titre:"titre x",
    content:"content x",
    authorId:1
}


const post2:Post = {
    id:2,
    titre:"titre x2 ",
    content:"content x2",
    authorId:1
}


const post3:Post = {
    id:3,
    titre:"titre x3",
    content:"content x3",
    authorId:3
}




userRepo.create(user1);
userRepo.create(user2);
postRepo.create(post1);
postRepo.create(post2);
console.log(postRepo.create(post3));
// console.log(postRepo.create(post3));

console.log(userRepo.read(1));

// console.log(userRepo.checkAuthor(1))