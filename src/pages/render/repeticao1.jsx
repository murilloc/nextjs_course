export default function repeticao1() {

    const listaAprovados = ['Joao', 'Maria', 'Veronica', 'Murillo', 'Bia', 'Cristiane', 'Ana Paulo', 'Murillo'];

    function renderizarLista() {
        return listaAprovados.map((nome,index) => {
            return <li key={index}>{nome}</li>
        })
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}