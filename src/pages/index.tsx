// import Image from "next/image";
// import { Inter } from "next/font/google";

import { getDisplayName } from "next/dist/shared/lib/utils"
import Topo from "@/components/Topo"
import Card from "@/components/Card"

// const inter = Inter({ subsets: ["latin"] });

const name = 'Jonson'
let canal = 'CBFCursos'

function retnome() {
  return name
}

const cnl = () => {
  return canal
}

export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>{retnome()}</div>
        <div>{cnl()}</div>
        <div>Cursos de react Next </div>
        <div>Typescript</div>
        <div style={{ color: '#f00', backgroundColor: '#bbb' }}>React</div>
      </div>
      <div className='flex justify-center gap-3'>
        <Card produto={'Mouse'} valor={'R$49,90'} />
        <Card produto={'Teclado'} valor={'R$69,90'} />
        <Card produto={'Monitor'} valor={'R$459,90'} />
        <Card produto={'CPU'} valor={'R$759,90'} />
      </div>
    </div>
  );
}

const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alineItens: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px'
}
