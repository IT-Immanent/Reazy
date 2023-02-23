const Property = require("../models/propertyModel");
const User = require("../models/user");

const propertyController = {
  // creating proprty details
  createProperty: async (req, res) => {
    try {
      const {
        userId,
        street_address,
        unit_no,
        city,
        state,
        postcode,
        representing,
      } = req.body;

      console.log(userId, "-----------");

      console.log(req.body, "000000000");
      // validating user by id
      const user = await User.findOne({
        _id: userId
      });

      console.log(user, "11111");

      if (!user) {
        res.status(400).json({
          staus: "error",
          message: "user not exsist",
        });
        return;
      }

      let newProperty = new Property({
        user_id: userId,
        street_address,
        unit_no,
        city,
        state,
        postcode,
        representing,
      });
      await newProperty.save();
      res.status(200).json({
        status: "Success",
        message: "Property Created.",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = propertyController;