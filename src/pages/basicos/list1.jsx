function gerarList(size = 20) {
    const arrayList1 = []

    for (let i = 0; i < size; i++) {
        arrayList1.push(<li key={i}>Item {i},</li>)
    }
    return arrayList1
}

export default function List1() {

    const arrayList1 = gerarList();

    return (
        <>
            <div>
                <ul>
                    {gerarList()}
                </ul>
            </div>
        </>
    )
}