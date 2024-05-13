import Card from "@/components/Card"
import Topo from "@/components/Topo"


const produtos = [{
    produto: 'Mouse',
    valor: 49.9,
    desconto: 0,
    disponivel: true
},
{
    produto: 'Teclado',
    valor: 180,
    desconto: 10,
    disponivel: true
},
{
    produto: 'Monitor',
    valor: 1500,
    desconto: 0,
    disponivel: true
},
{
    produto: 'CPU',
    valor: 700,
    desconto: 100,
    disponivel: true
},
{
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
    return (
        <div>
            <Topo/>
            <div className='flex justify-center gap-3'>
                {
                    produtos.map((e: any) => {
                        if (e.disponivel) {
                            return (
                                <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={caldDesc} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}