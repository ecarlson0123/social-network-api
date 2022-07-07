const router = require('express').Router();
const {
        createUser,
        updateUser,
        deleteUser,
        getAllUser,
        getUserById,
        addFriend,
        removeFriend
    } = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


router.route('/:userId/friends/:friendId').delete(removeFriend).put(addFriend);

module.exports = router;