import { Router } from 'express';
const router = new Router();
import { check } from 'express-validator';

import LojaController from '../controllers/LojaController';

// router.get('/', (req, res) => {
//   res.status(200).send({
//     title: 'LojaAPI',
//     version: '1.0.0',
//   });
// });

function checkPostLoja(req, res, next) {
  return [
    check('name', 'Adicione um nome')
      .not()
      .isEmpty(),
    check('lat')
      .not()
      .isEmpty()
      .withMessage('Adicione a latitude'),
    check('lng')
      .not()
      .isEmpty()
      .withMessage('Adicione a longitude'),
    check('address')
      .not()
      .isEmpty()
      .withMessage('Adicione o endereço'),
  ];
}

router.get('/lojas', LojaController.index);
router.post('/lojas', checkPostLoja(), LojaController.create);
router.put('/loja/:id', checkPostLoja(), LojaController.update);
router.delete('/loja/:id', LojaController.delete);

export default router;
