const router = require('express').Router();
const { addTask, getTasks, getTaskById, updateTask, deleteTask } = require('../../controllers/taskControllers');

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;