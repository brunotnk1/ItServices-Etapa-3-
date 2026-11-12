import { readFile , writeFile } from "fs/promises";
export async function carregarMaquinas() {
    const texto = await readFile("maquinas.json", "utf-8");
    return JSON.parse(texto);
  }

  export async function salvarMaquinas(lista) {
   writeFile("maquinas.json", JSON.stringify(lista, null, 2));
  }