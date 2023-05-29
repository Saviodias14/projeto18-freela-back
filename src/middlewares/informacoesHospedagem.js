export default function organizaInformacoe(result) {
    const { nomeHotel, destino, preco, descricao, fotoPrincipal } = result.rows[0]
    const resultTratado = { nomeHotel, destino, preco, descricao, fotos: [fotoPrincipal], comodidades: [] }
    result.rows.forEach((element) => {
        if (!resultTratado.fotos.includes(element.foto)) {
            resultTratado.fotos.push(element.foto)
        }
        if (!resultTratado.comodidades.includes(element.comodidades)) {
            resultTratado.comodidades.push(element.comodidades)
        }
    })
    return resultTratado
}