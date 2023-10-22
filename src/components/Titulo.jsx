import styles from '@/styles/Titulo.module.css'
export default function Titulo(props){

    console.log(props);
    return (
        <>
            <h1 className={styles.titulo}>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </>
    )
}