const productschema = require("../module/product.module");
const postdata = async (req, res) => {
  try {
    const data = new productschema({
      ...req.body,
    });
    const save = await data.save();
    res.json(save);
  } catch (error) {
    res.json(error["errors"]["category"]["message"]);
  }
};
const healthcheck = async (req, res) => {
  try {
    res.json("message : Hello UITOUX TEAM ");
  } catch (error) {
    res.json(error);
  }
};
const viewdata = async (req, res) => {
  try {
    let queryParam = req.query;
    const view = await productschema.find({
      // ratings: queryParam["rating"],
      category: queryParam["category"],
    });
    res.json(view);
  } catch (error) {
    res.json(error);
  }
};

const updatedata = async (req, res) => {
  try {
    const updateddata = await productschema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json({ msg: "Updated Data Successfully", data: updateddata });
  } catch (error) {
    res.json(error);
  }
};

const deletedata = async (req, res) => {
  try {
    const deleteddata = await productschema.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted Data Successfully", data: deleteddata });
  } catch (error) {
    res.json(error);
  }
};
module.exports = { postdata, viewdata, updatedata, deletedata, healthcheck };
