export function etiqueta({ id, cliente, tipo }) {
  return `${id} | ${cliente} (${tipo})`;
}

export function contadorCliente(maquinas){
maquinas.reduce((contagem, m) => {
 contagem[m.tipo] = (contagem[m.tipo] || 0) + 1;
  return contagem;
}, {});
}

export function proximoId(maquinas, prefix) {
 return maquinas.filter((m) => m.id.startsWith(prefix));
}