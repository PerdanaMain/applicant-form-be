const { validationResult } = require("express-validator");
const Biodata = require("../models/biodata");
const User = require("../models/user");

const index = async (req, res) => {
  try {
    const biodatas = await Biodata.getAllBiodata();

    return res.status(200).json({ biodatas });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    const exist = await Biodata.getBiodataByUserId(req.user.userId);

    if (exist.length > 0) {
      return res
        .status(400)
        .json({ message: "You are only can apply one time" });
    }

    const user = await User.getUserById(req.user.userId);
    const biodata = await Biodata.create(user.userId, req.body);

    return res.status(201).json({ message: "Biodata created", biodata });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const show = async (req, res) => {
  try {
    const user = req.user;
    const biodata = await Biodata.getBiodataByUserId(user.userId);

    return res.status(200).json({ biodata });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const biodataId = parseInt(req.params.biodataId);
    const biodata = await Biodata.update(biodataId, req.body);

    return res.status(200).json({ message: "Biodata updated", biodata });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const biodataId = parseInt(req.params.biodataId);
    await Biodata.destroy(biodataId);

    return res.status(200).json({ message: "Biodata deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  show,
  index,
  update,
  destroy,
};
