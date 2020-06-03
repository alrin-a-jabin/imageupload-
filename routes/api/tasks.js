const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// const auth = require('../../middleware/auth');

const Task = require('../../models/Task');
// const User = require('../../models/User');
// const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/task
// @desc     Create a post
// @access   Private
router.post(
  '/',
  [[check('title', 'title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // if (!req.file) {
    //     return res.status(401).json({ msg: 'No image provided' });
    // }
    if(!req.file){
      const error=new Error('no image provided');
      error.statusCode = 422;
      throw error;
  }
  console.log(req.file.path);
  console.log(req.body.file);
  
  const image=req.file.path;
  const title=req.body.title;
  const content=req.body.content;

    try {
    //   const user = await User.findById(req.user.id).select('-password');

      const newTask = new Task({
        title: title,
        content: content,
        image: image
        // ,
        // user: req.user.id
      });
      console.log(newTask);

      const task = await newTask.save();

      res.json(task);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);



module.exports = router;
