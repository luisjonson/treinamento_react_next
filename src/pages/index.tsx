// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const name = 'Jonson'
let canal = 'CBFCursos'

function retnome(){
  return name
}

const cnl = ()=>{
  return canal
}

function Topo(){
  return (
    <div>
      <div>Log</div>
      <div>{canal}</div>
      <div>{name}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Topo/>
      <div>{retnome()}</div>
      <div>{cnl()}</div>
      <div>Cursos de react Next </div>
      <div>Typescript</div>
      <div>React</div>
    </main>
  );
}
