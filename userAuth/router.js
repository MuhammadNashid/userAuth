import { Router } from "express";

import * as rh from './requestHandler.js'
import Auth from "./middleware/Auth.js";

const router=Router();

router.route('/adduser').post(rh.adduser)
router.route('/login').post(rh.login)
router.route('/getUser').get(Auth,rh.getUser)
router.route('/getUserDetails/').get(Auth,rh.getUserDetails)







export default router;