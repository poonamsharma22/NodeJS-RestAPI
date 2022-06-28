import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "Poonam",
        lastName: "Sharma"
    }
]

// all routes here start with /users
router.get('/', (req, res)=> {
    res.send(users);
});


export default router;