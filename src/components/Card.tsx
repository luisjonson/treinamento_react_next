interface CardProps {
    produto: string
    valor: number
    desconto: number
    funcao:any

}

export default function (props: CardProps) {
    return (
        <div className={`flex flex-col border-4 ${props.desconto > 0 ? 'border-red-700':'border-blue-700'} rounded-sm p-1`}>
            <div>Produto: {props.produto}</div>
            <div>Valor: R${props.valor}</div>
            { props.desconto > 0 && (
                <div>
                    <div>Desconto: R${props.desconto}</div>
                </div>
            ) }
            <div>Preço Venda: R${props.funcao(props.desconto,props.valor)}</div>
        </div>
    )
}