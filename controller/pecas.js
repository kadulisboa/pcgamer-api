const Pecas = require('../model/pecas');

const ControllerPecas = {

    CriarPeca(request, response) {
        const { Nome, Preco, Infos } = request.body;

        const peca = new Pecas({
            Nome,
            Preco,
            Infos
        });

        peca.save((error, peca) => {
            if (error) {
                return response.status(500).send({ message: error })
            }
            response.status(200).json(peca);
        });
    },

    async ListaPecas(request, response) {
        try {
            const lista = await Pecas.find({});
            if (!lista) {
                return response.status(500).send({ message: "Sem Peças registradas" })
            }
            return response.status(200).json(lista);
        } catch (err) {
            return response.status(500).send({ message: 'Erro no servidor' })
        }
    },

    async ListarPeca(request, response) {
        try {
            const peca = await Pecas.findById(request.params.id);
            if (!peca) {
                return response.status(500).send({ message: "Peça Não registrada" })
            }
            return response.status(200).json(peca);
        } catch (err) {
            return response.status(500).send({ message: 'Erro no servidor' })
        }

    },

    async DeletarPeca(request, response) {
        try {
            await Pecas.findByIdAndRemove(request.params.id);
            return response.status(200).json({ message: `Produto do ID ${request.params.id} apagado` });

        } catch (error) {

            response.status(500).send({ message: 'Erro no servidor' });

        }
    },

}

module.exports = ControllerPecas;
