const Categories = require("../models/Categories");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newCategories = new Categories(req.body);

  try {
    const savedCategories = await newCategories.save();
    res.status(200).json(savedCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedCategories = await Categories.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Categories.findByIdAndDelete(req.params.id);
    res.status(200).json("Categories has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CATEGORY
router.get("/find/:id", async (req, res) => {
  try {
    const category = await Categories.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CATEGORIES
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Categories.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Categories.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Categories.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;