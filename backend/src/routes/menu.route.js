import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {upload} from "../middleware/multer.middleware.js";
import checkRole from "../middleware/checkRole.middleware.js";

import { addMenuItem,
         getMenuItems,
         updateItem,
         deleteItem
 } from "../controllers/menu.controller.js";

 const router = Router();

 router.route("/addMenuItem").post(verifyJWT,checkRole(["admin"]),upload.single("thumbnail"),addMenuItem);

 router.route("/getMenuItem").get(getMenuItems);

 router.route("/updateMenuItem/:menuId").patch(verifyJWT,checkRole(["admin","staff"]),upload.single("thumbnail"),updateItem);

 router.route("/deleteMenuItem/:menuId").delete(verifyJWT,checkRole(["admin"]),deleteItem);

 export default router