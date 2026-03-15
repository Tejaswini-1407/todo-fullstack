const router = require("express").Router()
const Task = require("../models/Task")

// CREATE TASK
router.post("/", async(req,res)=>{
 try{

  const task = await Task.create(req.body)

  res.json(task)

 }catch(err){
  res.status(500).json(err)
 }
})


// GET USER TASKS
router.get("/:userId", async(req,res)=>{
 try{

  const tasks = await Task.find({
   userId:req.params.userId
  })

  res.json(tasks)

 }catch(err){
  res.status(500).json(err)
 }
})


// UPDATE TASK
router.put("/:id", async(req,res)=>{
 try{

  const updated = await Task.findByIdAndUpdate(
   req.params.id,
   req.body,
   {new:true}
  )

  res.json(updated)

 }catch(err){
  res.status(500).json(err)
 }
})


// DELETE TASK
router.delete("/:id", async(req,res)=>{
 try{

  await Task.findByIdAndDelete(req.params.id)

  res.json("Task deleted")

 }catch(err){
  res.status(500).json(err)
 }
})

module.exports = router