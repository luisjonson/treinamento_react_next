// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const name = 'Jonson'
let canal = 'CBFCursos'

function retnome(){
  return name
}

export default function Home() {
  return (
    <main>
      <div>{retnome()}</div>
      <div>{canal}</div>
      <div>Cursos de react Next </div>
      <div>Typescript</div>
      <div>React</div>
    </main>
  );
}
