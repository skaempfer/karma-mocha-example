export class Greeter {
    sayHello(name?: string): string {
        if (name){
            return `Hello ${name}!`;
        }
        else {
            return `Hello stranger!`;
        }
    }
}
