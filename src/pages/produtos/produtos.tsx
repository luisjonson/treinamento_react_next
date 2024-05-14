import Card from "@/components/Card"
import Topo from "@/components/Topo"
import {useRouter} from "next/router"

const produtos = [{
    id:1,
    produto: 'Mouse',
    valor: 49.9,
    desconto: 0,
    disponivel: true
},
{   id:2,
    produto: 'Teclado',
    valor: 180,
    desconto: 10,
    disponivel: true
},
{   id:3,
    produto: 'Monitor',
    valor: 1500,
    desconto: 0,
    disponivel: true
},
{   id:4,
    produto: 'CPU',
    valor: 700,
    desconto: 100,
    disponivel: true
},
{   id:5,
    produto: 'Cx.som',
    valor: 100,
    desconto: 0,
    disponivel: true
}
]

function caldDesc(v: number, d: number) {

    console.log("valor:" + v)
    console.log("desconto" + d)
    return v - d
}

function caldDesctaxa(v: number, d: number) {
    return v - (d / 2)
}

export default function produtosPagina() {
    const router = useRouter()
    //const nome = router.query.nome
    //const curso = router.query.curso

    const{nome,curso}=router.query


    console.log(nome)
    console.log(curso)

    return (
        <div>
            <Topo/>
            <div className='flex justify-center gap-3'>
                {
                    produtos.map((e: any) => {
                        if (e.disponivel) {
                            return (
                                <Card key={e.id} produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={caldDesc} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}