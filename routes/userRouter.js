const router = require('express').Router();
import auth from '../middleware/auth';
import { searchUser, getUser, updateUser, follow, unfollow, suggestionsUser } from '../controllers/userCtrl';

router.get('/search', auth, searchUser);

router.get('/user/:id', auth, getUser);

router.patch("/user", auth, updateUser);

router.patch("/user/:id/follow", auth, follow);
router.patch("/user/:id/unfollow", auth, unfollow);

router.get("/suggestionsUser", auth, suggestionsUser);





export default router;