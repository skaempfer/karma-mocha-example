import { expect } from "chai";
import { Greeter } from "./greeter";

describe("Greeter", () => {
    it("should greet people with their name", () => {
        const greeter = new Greeter();

        const actual = greeter.sayHello("John");

        expect(actual).to.equal("Hello John!");
    });

    it("should greet people anonymously", () => {
        const greeter = new Greeter();

        const actual = greeter.sayHello();

        expect(actual).to.equal("Hello stranger!");
    });
});