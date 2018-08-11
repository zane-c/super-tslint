class Robot {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return name
  }

  sayHello() {
    console.log('Hello!');
  }
}

const robo = new Robot("Mac");
robo.sayHello();
