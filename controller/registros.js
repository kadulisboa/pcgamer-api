const Registros = require('../model/registros');
const PecasM = require('../model/pecas');

const ControllerRegistros = {

    async CriarRegistro(request, response) {

        const { Pecas, Quantidade, Pago } = request.body;

        const { Preco } = await PecasM.findById(Pecas, 'Preco');

        const Total = Quantidade * Preco;

        const registro = new Registros({
            Pecas,
            Quantidade,
            Pago,
            ValorTotal: await Total
        });

        registro.save((error, regis) => {
            if (error) {
                return response.status(500).send({ message: error })
            }
            response.status(200).json(regis);
        });
    },

    async AtualizarRegistro(request, response) {

        const { id } = request.params;
        const { Pago } = request.body;

        const registro = await Registros.findByIdAndUpdate(id,
            {
                Pago
            }, { new: true });

        registro.save((error, regis) => {
            if (error) {
                return response.status(500).send({ message: error });
            }
            response.status(200).json(regis);
        });
    },

    async DeletarRegistro(request, response) {
        try {
            await Registros.findByIdAndRemove(request.params.id);
            return response.status(200).json({ message: `Registro do ID ${request.params.id} apagado` });
        } catch (error) {
            response.status(500).send({ message: 'Erro no servidor' });
        }
    },

    async ListaRegistros(request, response) {
        const registros = await Registros.find().populate('Pecas', 'Nome + Preco');
        return response.status(200).json(registros);
    },

    async ListarRegistro(request, response) {
        try {
            console.log(request.params.id);
            const registro = await Registros.findById(request.params.id).populate('Pecas', 'Nome + Preco');
            if (!registro) {
                return response.status(500).send({ message: "Registro Não Encontrado" })
            }
            return response.status(200).json(registro);
        } catch (err) {
            return response.status(500).send({ message: 'Erro no servidor' })
        }
    },
}

module.exports = ControllerRegistros;
