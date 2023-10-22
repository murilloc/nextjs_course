export default class Produto{
    _id
    _produto
    _preco


    constructor(id, produto, preco) {
        this._id = id;
        this._produto = produto;
        this._preco = preco;
    }


    get id() {
        return this._id;
    }

    get produto() {
        return this._produto;
    }

    get preco() {
        return this._preco;
    }


}