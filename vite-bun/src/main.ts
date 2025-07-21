import "./style.css";
import { add, setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class="text-5xl font-bold">Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

const buttonElement = document.getElementById("counter") as HTMLButtonElement;

setupCounter(buttonElement);

add(1, 2);
