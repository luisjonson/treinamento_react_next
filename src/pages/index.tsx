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
        <Card produto={'Mouse'} valor={49.90}  desconto={10.10}/>
        <Card produto={'Teclado'} valor={69.90} desconto={0} />
        <Card produto={'Monitor'} valor={459.90}  desconto={0}/>
        <Card produto={'CPU'} valor={759.90}  desconto={0}/>
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
