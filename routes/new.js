const New = require("../models/New");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newNew = new New(req.body);

  try {
    const savedNew = await newNew.save();
    res.status(200).json(savedNew);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedNew = await New.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedNew);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await New.findByIdAndDelete(req.params.id);
    res.status(200).json("New has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET New
router.get("/find/:id", async (req, res) => {
  try {
    const getnew = await New.findById(req.params.id);
    res.status(200).json(getnew);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL News
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let news;

    if (qNew) {
      news = await New.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      news = await New.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      news = await New.find();
    }

    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;