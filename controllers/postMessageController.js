const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const { PostMessage } = require('../models/postMessage');

//Retrieve the Record
router.get('/', (req, res) => {
 PostMessage.find((err, docs) => {
  if (err) {
   console.log('Error Found while retrieving Records ' + JSON.stringify(err, undefined, 2));
  }
  else {
   res.send(docs);
  }
 });
});

//New Record
router.post('/', (req, res) => {
 const newRecord = new PostMessage({
  title: req.body.title,
  message: req.body.message
 });
 newRecord.save((err, docs) => {
  if (err) {
   console.log('Error Found while posting the Records ' + JSON.stringify(err, undefined, 2));
  }
  else {
   res.send(docs);
  }
 });
});

//Updating the Record
router.put('/:id', (req, res) => {
 if (!ObjectID.isValid(req.params.id)) {
  return res.status(400).send('No Record with Given ID ' + req.params.id);
 }

 const updatedRecord = {
  title: req.body.title,
  message: req.body.message
 };

 PostMessage.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, { new: true }, (err, docs) => {
  if (err) {
   console.log('Error Found while updating the Record ' + JSON.stringify(err, undefined, 2));
  }
  else {
   res.send(docs);
  }
 });
});

//Deleting the Record
router.delete('/:id', (req, res) => {
 if (!ObjectID.isValid(req.params.id)) {
  return res.status(400).send('No Record with Given ID ' + req.params.id);
 }

 PostMessage.findByIdAndRemove(req.params.id, (err, docs) => {
  if (err) {
   console.log('Error Found while Deleting the Record ' + JSON.stringify(err, undefined, 2));
  }
  else {
   res.send(docs);
  }
 });
});

module.exports = router;