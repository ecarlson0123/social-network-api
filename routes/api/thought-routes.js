const router = require('express').Router();
const {
        addThought,
        updateThought,
        deleteThought,
        getAllThoughts,
        getThoughtById,
        addReaction,
        removeReaction
    } = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
    .post(addReaction);

router.route('/:thoughtId/reactions').put(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;