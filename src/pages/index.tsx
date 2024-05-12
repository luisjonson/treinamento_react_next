// import Image from "next/image";
// import { Inter } from "next/font/google";

import { getDisplayName } from "next/dist/shared/lib/utils"
import Topo from "@/components/Topo"
import Card from "@/components/Card"

// const inter = Inter({ subsets: ["latin"] });

const name = 'Jonson'
let canal = 'CBFCursos'

const produtos=[{
  produto:'Mouse',
  valor:49.9,
  desconto:0,
  disponivel:true
},
{
  produto:'Teclado',
  valor:180,
  desconto:10,
  disponivel:true
},
{
  produto:'Monitor',
  valor:1500,
  desconto:0,
  disponivel:true
},
{
  produto:'CPU',
  valor:700,
  desconto:100,
  disponivel:true
},
{
  produto:'Cx.som',
  valor:100,
  desconto:0,
  disponivel:true
}
]

function caldDesc(v:number, d:number){

  console.log("valor:" + v) 
  console.log("desconto" + d)
  return v-d
}

function caldDesctaxa(v:number, d:number){
  return v - (d/2)
}
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
        {
          produtos.map((e:any)=>{
            if(e.disponivel){
              return(
                <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={caldDesc}/>
              )
            }
          })
        }
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
