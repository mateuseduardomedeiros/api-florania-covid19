const Joi = require('joi');
const Registro = require('../models/RegistroModel');

module.exports = {
    async index(req, res) {
        try {
            const registros = await Registro.find();
            return res.status(200).json(registros);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
    async lastIndex(req, res) {
        try {
            const registro = await Registro.findOne().sort({ createdAt: -1 }).limit(1);
            return res.status(200).json(registro);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
    async create(req, res) {
        var data = req.body;
        if (data.senha != 'ZWR1YXJkbwo=') {
            return res.status(403).json({ message: 'Operação não permitida' })
        } else {
            delete data.senha;
            const schema = Joi.object().keys({
                data: Joi.string().required(),
                notificados: Joi.number().required(),
                suspeitos: Joi.number().required(),
                confirmados: Joi.number().required(),
                internados: Joi.number().required(),
                mortes: Joi.number().required(),
                curados: Joi.number().required(),
                descartados: Joi.number().required(),
            });
            Joi.validate(data, schema, { abortEarly: true }, async (err, value) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                try {
                    const registro = await Registro.create(req.body);
                    return res.status(201).send(registro);
                } catch (err) {
                    return res.status(500).json({ error: err.message })
                }
            });

        }

    },
    async show(req, res) {
        try {
            const registro = await Registro.findById(req.params.id);
            if (!registro) {
                return res.status(404).json({ message: "Registro não encontrado!" });
            }
            return res.status(200).json(registro);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
    async update(req, res) {
        var data = req.body
        if (data.senha != 'ZWR1YXJkbwo=') {
            return res.status(403).json({ message: 'Operação não permitida' })
        } else {
            delete data.senha;
            try {
                const registro = await Registro.findByIdAndUpdate(req.params.id, data, { new: true });
                await registro.save();
                return res.status(200).json({ message: "Registro atualizado com sucesso!", registro });
            } catch (err) {
                return res.status(500).json({ message: err.message });
            }
        }

    },
    async destroy(req, res) {
        var data = req.body;
        if (data.senha != 'ZWR1YXJkbwo=') {
            return res.status(403).json({ message: 'Operação não permitida' })
        } else {
            delete data.senha;
            try {
                const registro = await Registro.findById(req.params.id);
                if (!registro) {
                    return res.status(404).send({
                        message: 'Registro não encontrado',
                    });
                }
                await registro.remove();
                return res.status(200).json({ message: "Registro removido com sucesso!" });
            } catch (err) {
                return res.status(500).json({ message: err.message });
            }

        }

    }

}