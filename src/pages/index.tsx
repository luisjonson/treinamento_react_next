// import Image from "next/image";
// import { Inter } from "next/font/google";

import { getDisplayName } from "next/dist/shared/lib/utils"

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
    <div className='flex justify-between items-center bg-zinc-300 h-[100px]'>
      <div>Log</div>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-3x1'>{canal}</div>
        <div className='subtituloTopo'>Curso de react</div>
      </div>
      <div>{name}</div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Topo/>
      <div style={testecss}>
        <div>{retnome()}</div>
        <div>{cnl()}</div>
        <div>Cursos de react Next </div>
        <div>Typescript</div>
        <div style={{color:'#f00',backgroundColor:'#bbb'}}>React</div>
      </div>
    </div>
  );
}

const testecss={
  display:'flex',
  justifyContent:'center',
  alineItens:'center',
  color:'#00f',
  backgroundColor:'#eee',
  fontSize:'20px'
}
