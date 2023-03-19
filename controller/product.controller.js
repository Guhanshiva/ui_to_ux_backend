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
module.exports = { postdata, viewdata };
