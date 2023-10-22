import Lista from "@/components/Lista";
import ItemLista from "@/components/ItemLista";

export default function componentesComFilhos() {

    return <div>
        <Lista>
            <ItemLista conteudo={'Item #01'}/>
            <ItemLista conteudo={'Item #02'}/>
            <ItemLista conteudo={'Item #03'}/>
        </Lista>

    </div>
}