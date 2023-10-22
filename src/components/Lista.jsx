export default function Lista(props){

    return <div>
        <h2>Listagem</h2>
        <ul>
            {props.children}
        </ul>
    </div>

}