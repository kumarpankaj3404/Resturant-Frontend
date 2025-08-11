import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

import { registerUser,
         loginUser,
         logoutUser,
         refreshAccessToken,
         changePassword,
         changeAvatar,
         getUserProfile

 } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(upload.single("avatar"),registerUser);
router.route("/login").post(upload.none(),loginUser);

//Secure Route

router.route("/logout").post(upload.none(),verifyJWT,logoutUser);

router.route("/refresh-token").post(upload.none(),refreshAccessToken);

router.route("/change-password").post(upload.none(),verifyJWT,changePassword);

router.route("/change-avatar").post(upload.single("avatar"), verifyJWT, changeAvatar);

router.route("/profile").get(upload.none(),verifyJWT, getUserProfile);

export default router;