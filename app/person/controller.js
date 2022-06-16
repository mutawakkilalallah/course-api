const { Person, Program } = require("../../models");

// relation
Program.hasOne(Person);
Person.belongsTo(Program, { as: "program" });

module.exports = {
  //get all data
  index: async (req, res) => {
    try {
      // get data from database
      const data = await Person.findAndCountAll({
        attributes: ["uuid", "name", "address", "createdAt", "updatedAt"],
        include: {
          model: Program,
          as: "program",
          attributes: ["title", "createdAt", "updatedAt"],
        },
      });

      // cheking data
      if (data.rows.length < 1) {
        // null response
        res
          .status(200)
          .set({
            "x-data-total": data.rows.length,
          })
          .json([]);
      } else {
        // success response
        res
          .status(200)
          .set({
            "x-data-total": data.rows.length,
          })
          .json(data.rows);
      }
    } catch (error) {
      // error response
      res.status(500).json({
        statusCode: 500,
        err: error.message,
        message: "Internal Server Error",
      });
    }
  },

  //get data by uuid
  detail: async (req, res) => {
    try {
      // get data from database
      const data = await Person.findOne({
        attributes: ["uuid", "name", "address", "createdAt", "updatedAt"],
        include: {
          model: Program,
          as: "program",
          attributes: ["title", "createdAt", "updatedAt"],
        },
        where: {
          uuid: req.params.uuid,
        },
      });

      // checking data
      if (!data) {
        // null response
        res.status(404).json({
          statusCode: 404,
          error: "NOT FOUND",
          message: "No Person Found",
        });
      } else {
        // success response
        res.status(200).json(data);
      }
    } catch (error) {
      // error response
      res.status(500).json({
        statusCode: 500,
        err: error.message,
        message: "Internal Server Error",
      });
    }
  },

  // create data
  create: async (req, res) => {
    try {
      // insert program to DB
      const program = await Program.create({
        title: req.body.title,
      });

      // insert person to DB
      const person = await Person.create({
        name: req.body.name,
        address: req.body.address,
        programId: program.id,
      });

      // response berhasil
      res.status(201).json({
        message: "person created",
        uuid: person.uuid,
      });
    } catch (err) {
      // jika gagal

      // response gagal
      res.status(500).json({
        statusCode: 500,
        err: err.message,
        message: "Internal Server Error",
      });
    }
  },

  //update data
  update: async (req, res) => {
    try {
      // get data from database
      const data = await Person.findOne({
        where: {
          uuid: req.params.uuid,
        },
      });

      // checking data
      if (!data) {
        // null response
        res.status(404).json({
          statusCode: 404,
          error: "NOT FOUND",
          message: "No Person Found",
        });
      } else {
        // update person to DB
        await data.update({
          name: req.body.name,
          address: req.body.address,
        });

        // success resoonse
        res.status(200).json({
          message: "person updated",
        });
      }
    } catch (error) {
      // error response
      res.status(500).json({
        statusCode: 500,
        err: error.message,
        message: "Internal Server Error",
      });
    }
  },

  //update program data
  updateProgram: async (req, res) => {
    try {
      // get data from database
      const data = await Person.findOne({
        where: {
          uuid: req.params.uuid,
        },
      });

      // checking data
      if (!data) {
        // null response
        res.status(404).json({
          statusCode: 404,
          error: "NOT FOUND",
          message: "No Person Found",
        });
      } else {
        // find program
        const dataProgram = await Program.findOne({
          where: {
            id: data.programId,
          },
        });
        // update program to DB
        await dataProgram.update({
          title: req.body.title,
        });

        // success resoonse
        res.status(200).json({
          message: "proogram updated",
        });
      }
    } catch (error) {
      // error response
      res.status(500).json({
        statusCode: 500,
        err: error.message,
        message: "Internal Server Error",
      });
    }
  },

  //delete data
  destroy: async (req, res) => {
    try {
      // get data from database
      const data = await Person.findOne({
        where: {
          uuid: req.params.uuid,
        },
      });

      // checking data
      if (!data) {
        // null response
        res.status(404).json({
          statusCode: 404,
          error: "NOT FOUND",
          message: "No Person Found",
        });
      } else {
        // destroy data from DB
        await data.destroy();

        // success response
        res.status(200).json({
          message: "person deleted",
        });
      }
    } catch (error) {
      // error response
      res.status(500).json({
        statusCode: 500,
        err: error.message,
        message: "Internal Server Error",
      });
    }
  },
};
