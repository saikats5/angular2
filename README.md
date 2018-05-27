# angular2
npm install -g angular-cli
ng new projectname

need to work on src folder
ng serve
http://localhost:4200/

myvar:string = "hello";
myvar:number = 20;
myvar:boolean = true;
myvar:any = 50;
myvar:number[]

class Car{
    wheels:number = 4;
    speed:number;
    constructor(mph:number){
        this.speed = mph;
    }
    drive{
        console.log('test');
    }
}
mycar:Car = new Car(70);

ng generate component home
directives is deprecated from RC5
