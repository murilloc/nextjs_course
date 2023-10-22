import listaProdutos from '@/data/listaProdutos'

export default function repeticao2() {
    const borda = {
        border:"1px solid black"
    }
    function renderizarLinas() {
        return listaProdutos.map(produto => {
            return <tr key={produto.id}>
                <td style={borda}>{produto.id}</td>
                <td>{produto.produto}</td>
                <td>{produto.preco}</td>
            </tr>
        })
    }

    return (
        <div>
            <table style={borda}>
                <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                </thead>
                <tbody>
                {renderizarLinas()}
                </tbody>
            </table>
        </div>
    )
}