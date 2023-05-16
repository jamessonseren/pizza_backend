import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUsersControllers";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController  } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProdutController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController  } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { CompleteOrderControler } from "./controllers/order/CompleteOrderController";
import { NewPasswordController } from "./controllers/user/NewPasswordController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";

import multer from "multer";


import { isAuthenticated } from "./middlwares/isAuthenticated";

import uploadConfig from './config/multer'
import { SendEmailRecoveryPassController } from "./controllers/user/SendEmailRecoveryPassController";

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

//ROTAS USER
router.post('/user', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.post('/new-password', new SendEmailRecoveryPassController().handle)

router.put('/new-password', new NewPasswordController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)



//Rotas Category
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle )

router.delete('/category/delete', isAuthenticated, new DeleteCategoryController().handle)

//Rotas product
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle )

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle )

router.delete('/product/delete', isAuthenticated, new DeleteProductController().handle)

//Rotas order
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.post('/order/add',isAuthenticated, new AddItemController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.delete('/order/delete', isAuthenticated, new RemoveItemController().handle)
router.put('/order', isAuthenticated, new SendOrderController().handle )
router.get('/orders', isAuthenticated, new ListOrdersController().handle )
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle )
router.put('/order/complete', isAuthenticated, new CompleteOrderControler().handle)

export {router}