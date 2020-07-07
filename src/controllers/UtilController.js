module.exports = {
  async atual (req, res) {
    let agora = new Date();
    let atual = {
      dataAtual: agora.toLocaleDateString('pt-BR'),
      dataAtualISO: `${agora.toLocaleDateString('pt-BR').split('/')[2]}-${agora.toLocaleDateString('pt-BR').split('/')[1]}-${agora.toLocaleDateString('pt-BR').split('/')[0]}`,
      dataAtualMin: `${agora.toLocaleDateString('pt-BR').split('/')[1]}/${agora.toLocaleDateString('pt-BR').split('/')[2]}`,
      dataAtualMinISO: `${agora.toLocaleDateString('pt-BR').split('/')[2]}-${agora.toLocaleDateString('pt-BR').split('/')[1]}`,
      horaAtual: agora.toLocaleTimeString('pt-BR'),
      horaAtualMin: `${agora.toLocaleTimeString('pt-BR').split(":")[0]}:${agora.toLocaleTimeString('pt-BR').split(":")[1]}`,
      dataHoraAtual: `${agora.toLocaleDateString('pt-BR')} ${agora.toLocaleTimeString('pt-BR')}`,
      dataHoraAtualMin: `${agora.toLocaleDateString('pt-BR')} ${agora.toLocaleTimeString('pt-BR').split(":")[0]}:${agora.toLocaleTimeString('pt-BR').split(":")[1]}`,
    }
    return res.status(200).json(atual);
  },
};
