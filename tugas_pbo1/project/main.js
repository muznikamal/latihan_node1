// main.js
import Mobil from "./Mobil.js";
import Motor from "./Motor.js";
import Sepeda from "./Sepeda.js";

const m1 = new Mobil("Toyota Avanza");
const m2 = new Motor("Honda Beat");
const s1 = new Sepeda("Polygon");

m1.start();
m1.info();
m1.stop();

console.log("");

m2.start();
m2.info();
m2.stop();

console.log("");

s1.start();
s1.info();
s1.stop();
