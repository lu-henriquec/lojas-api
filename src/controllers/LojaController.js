import { validationResult } from 'express-validator';
import Loja from '../schemas/loja';

class LojaController {
  async index(req, res) {
    try {
      const lojas = await Loja.find({}, 'name lat lng address');

      return res.json(lojas);
    } catch (e) {
      return res.status(500).send({ message: 'Falha ao carregar as lojas.' });
    }
  }

  async create(req, res) {
    const { errors } = validationResult(req);

    if (errors.length > 0) res.status(400).send({ message: errors });

    try {
      const { name, lat, lng, address } = req.body;

      const loja = new Loja({
        name,
        lat,
        lng,
        address,
      });

      await loja.save();

      res.status(201).send({ message: 'Loja cadastrada com sucesso!' });
    } catch (e) {
      res.status(500).send({ message: 'Falha ao cadastrar a loja.' });
    }
  }

  async update(req, res) {
    const { errors } = validationResult(req);

    if (errors.length > 0) res.status(400).send({ message: errors });

    try {
      const { name, lat, lng, address } = req.body;

      await Loja.findByIdAndUpdate(req.params.id, {
        name,
        lat,
        lng,
        address,
      });

      res.status(200).send({ message: 'Loja atualizada com sucesso!' });
    } catch (e) {
      res.status(500).send({ message: 'Falha ao atualizar a loja.' });
    }
  }

  async delete(req, res) {
    try {
      await Loja.findByIdAndRemove(req.params.id);

      res.status(201).send({ message: 'Loja excluida com sucesso!' });
    } catch (e) {
      res.status(500).send({ message: 'Falha ao excluir a loja.' });
    }
  }
}

export default new LojaController();
