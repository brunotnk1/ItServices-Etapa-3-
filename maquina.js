import { carregarMaquinas } from "./dados.js";
import { etiqueta, contadorCliente, proximoId } from "./util.js";
const maquinas = await carregarMaquinas();
const maquinasdavero = maquinas.filter((maquina) => maquina.cliente == "Vero Verde");
const maquinaalf = maquinas.find((maquina) => maquina.id == "ALF-0001");
const ids = maquinas.map((maquina) => maquina.id);
const nova = {
  id: "ALF-0002",
  cliente: "Alfa Contábil",
  modelo: "Dell Vostro 3520",
  serial: "DVS111",
  tipo: "Mensal",
};

console.log(maquinasdavero);
console.log(maquinaalf);
console.log(ids);

maquinas.forEach((maquina) => {
  console.log(`${maquina.id} - ${maquina.modelo}`);
});

const maquinasAtualizadas = [...maquinas, nova];

console.log(maquinas.map((m) => etiqueta(m)));
console.log(contadorCliente(maquinasAtualizadas));
console.log(proximoId(maquinasAtualizadas, "ALF-"));

//await salvarMaquinas(maquinasAtualizadas);
//console.log(`Máquina ${nova.id} salva! Total: ${maquinasAtualizadas.length}`);