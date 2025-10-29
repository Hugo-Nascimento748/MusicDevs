class Musica{
    private nome: string;
    private banda: string;
    private produtora: string;
    
    constructor (nome: string, banda: string, produtora: string) {
        this.nome = nome;
        this.banda = banda;
        this.produtora = produtora;
    }

    public setNome(nome: string) {this.nome = nome;}
    public getNome(){return this.nome;}

    public setBanda(banda: string) {this.banda = banda;}
    public getBanda() {return this.banda;}

    public setProdutora(produtora: string) {this.produtora = produtora;}
    public getProdutora() {return this.produtora;}
}

export = Musica;