const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateSingleUser,
  deleteUser,
  removeFriend,
  addFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateSingleUser).delete(deleteUser);

// router.route('/:userId/friends');

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
