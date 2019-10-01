import { Router } from 'express';
import { check } from 'express-validator';
import LojaController from '../controllers/LojaController';

const router = new Router();

// router.get('/', (req, res) => {
//   res.status(200).send({
//     title: 'LojaAPI',
//     version: '1.0.0',
//   });
// });

function checkPostLoja() {
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

router.get('/api/lojas', LojaController.index);
router.post('/api/lojas', checkPostLoja(), LojaController.create);
router.put('/api/loja/:id', checkPostLoja(), LojaController.update);
router.delete('/api/loja/:id', LojaController.delete);

export default router;
