"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const MusicaModel_1 = require("./MusicaModel");
const readline_sync_1 = __importDefault(require("readline-sync"));
async function main() {
    await (0, db_1.conectarBanco)();
    console.log("Bem-vindo ao MusicDevs!");
    while (true) {
        console.log("\n1 - Adicionar música");
        console.log("2 - Buscar música");
        console.log("3 - Listar todas as músicas");
        console.log("0 - Sair");
        const opcao = readline_sync_1.default.question("Escolha: ");
        if (opcao === "1") {
            const nome = readline_sync_1.default.question("Nome da música: ");
            const banda = readline_sync_1.default.question("Banda: ");
            const produtora = readline_sync_1.default.question("Produtora: ");
            const nova = await (0, MusicaModel_1.inserirMusica)({ nome, banda, produtora });
            console.log("Música adicionada:", nova);
        }
        else if (opcao === "2") {
            const termo = readline_sync_1.default.question("Pesquisar por nome, banda ou produtora: ");
            const resultados = await (0, MusicaModel_1.buscarMusicas)(termo);
            if (resultados.length === 0) {
                console.log("Nenhum resultado encontrado.");
            }
            else {
                console.table(resultados);
            }
        }
        else if (opcao === "3") {
            const todas = await (0, MusicaModel_1.listarTodasMusicas)();
            if (todas.length === 0) {
                console.log("Nenhuma música cadastrada.");
            }
            else {
                console.table(todas);
            }
        }
        else if (opcao === "0") {
            console.log("Encerrando...");
            process.exit();
        }
        else {
            console.log("Opção inválida.");
        }
    }
}
main();
