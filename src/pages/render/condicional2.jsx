import If from "@/components/If";


export default function condicional2() {
    const numero = 7

    return (
        <div>
            <If teste={numero % 2 === 0}>
                <h1>O numero {numero} é par</h1>
            </If>
            <If teste={numero % 2 !== 0}>
                <h1>O numero {numero} é impar</h1>
            </If>
        </div>
    )
}