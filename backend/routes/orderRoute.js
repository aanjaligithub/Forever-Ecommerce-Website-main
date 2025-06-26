import express from "express"
import { placedOrder, placedOrderStripe,updateStatus,allOrders, userorders, verifyStripe } from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"

const orderRouter = express.Router()

//admin features
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status',adminAuth, updateStatus)

//payment features
orderRouter.post('/place', authUser ,placedOrder)
orderRouter.post('/stripe', authUser ,placedOrderStripe)

//user features
orderRouter.post('/userorders', authUser ,userorders)

//verfy payment
orderRouter.post('/verifyStripe', authUser,verifyStripe)

export default orderRouter