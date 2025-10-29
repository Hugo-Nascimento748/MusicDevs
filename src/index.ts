import { conectarBanco } from "./db";
import { inserirMusica, buscarMusicas } from "./MusicaModel";
import readlineSync from "readline-sync";

async function main() {
  await conectarBanco();

  console.log("Bem-vindo ao MusicDevs!");
  while (true) {
    console.log("\n1 - Adicionar música");
    console.log("2 - Buscar música");
    console.log("0 - Sair");

    const opcao = readlineSync.question("Escolha: ");

    if (opcao === "1") {
      const nome = readlineSync.question("Nome da música: ");
      const banda = readlineSync.question("Banda: ");
      const produtora = readlineSync.question("Produtora: ");
      const nova = await inserirMusica({ nome, banda, produtora });
      console.log("✅ Música adicionada:", nova);
    }

    else if (opcao === "2") {
      const termo = readlineSync.question("Pesquisar por nome, banda ou produtora: ");
      const resultados = await buscarMusicas(termo);
      if (resultados.length === 0) {
        console.log("Nenhum resultado encontrado.");
      } else {
        console.table(resultados);
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
