import  express  from "express";
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/userController.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/// CREATE NEW USER
router.post("/", createUser);

/// UPDATE USER
router.put("/:id", verifyUser, updateUser);

/// DELETE USER
router.delete("/:id", verifyUser, deleteUser);

/// GET SINGLE USER
router.get("/:id", verifyUser, getSingleUser);

/// GET ALL USERS 
router.get("/", verifyAdmin, getAllUsers);

export default router;