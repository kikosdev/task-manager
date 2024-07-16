const asyncHandler = require('express-async-handler')
const Task = require('../models/taskModel')

// @desc create new task
// @route post /api/v1/tasks/
const addTask = asyncHandler(async(req, res) => {
  const { title, description, status } = req.body

  //check all fields
  if (!title || !description || !status) {
    res.status(422);
    throw new Error("please add all fields");
  }

  //check if task exists with title
  const taskExists = await Task.findOne({
    title,
  });

  //create Task
  const task = await Task.create({
    title,
    description,
    status
  });
  
  if (task) {
    res.status(201).json(task);
  } else {
    res.status(422);
    throw new Error("invalid Task data");
  }
})

// @desc get Task list
// @route get /api/v1/tasks/
const getTasks = asyncHandler(async (req, res, next) => {
  const tasks = await Task.find();
  return res.status(200).json(tasks);
});

// @desc get Task By ID
// @route get /api/v1/tasks/:id
const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(422);
    throw new Error("invalid Task id");
  }
  res.status(200).json(task);
});

// @desc update Task
// @route put /api/v1/tasks/:id
const updateTask = asyncHandler(async (req, res) => {

  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(422);
    throw new Error("invalid Task id");
  }

  const entries = Object.keys(req.body);
  const updates = {};

  // constructing dynamic query : get the informations entered in BODY
  for (let i = 0; i < entries.length; i++) {
    updates[entries[i]] = Object.values(req.body)[i];
  }

  // update Task fields according to the BODY and push new operations
  let taskUpdate = await Task.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: updates,
    },
    {
      new: true,
    }
  );

  if (taskUpdate) {
    res.send(taskUpdate);
  } else {
    res.status(422);
    throw new Error("Task update error");
  }

});

// @desc delete Task
// @route delete /api/v1/tasks/:id
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(422);
    throw new Error("invalid task id");
  }
  const filter = { _id: req.params.id };

  await Task.deleteOne(filter)
    .then((deletedTask) => res.status(200).json(deletedTask))
    .catch((err) => {
      res.status(422);
      throw err;
    });
});

module.exports = {
  addTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
}