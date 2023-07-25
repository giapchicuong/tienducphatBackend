const Message = require("../models/Message");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");

const router = require("express").Router();

// CREATE MESSAGE
router.post("/",async (req , res) => {
    const newMessage = new Message(req.body)
    try {
        const savedMessage = await newMessage.save()
        res.status(200).json(savedMessage)
    } catch (err) {
       res.status(500).json(err)
    }
})


// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json("Message has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET ALL 
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const Messages = await Message.find()
    res.status(200).json(Messages)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;