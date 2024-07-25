const Employer = require("../models/EmployersModel");

exports.createEmployer = async (req, res) => {
  try {
    const {
      empName,
      natureContent,
      industry,
      website,
      contact_email,
      contact_phone,
      // logo,
      description,
      // userId,
    } = req.body;

    const employer = await Employer.create({
      empName,
      natureContent,
      industry,
      website,
      contact_email,
      contact_phone,
      // logo,
      description,
      // userId,
    });

    res.status(201).json({ success: true, data: employer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getEmployers = async (req, res) => {
  try {
    const employers = await Employer.find();
    res.status(200).json({
      length: employers.length,
      success: true,
      data: employers,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getEmployer = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id);
    if (!employer) {
      return res
        .status(404)
        .json({ success: false, error: "Employer not found" });
    }
    res.status(200).json({ success: true, data: employer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateEmployer = async (req, res) => {
  try {
    const employer = await Employer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!employer) {
      return res
        .status(404)
        .json({ success: false, error: "Employer not found" });
    }
    res.status(200).json({
      success: "Employes were successfully updated!",
      data: employer,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.deleteEmployer = async (req, res) => {
  try {
    const employer = await Employer.findByIdAndDelete(req.params.id);
    if (!employer) {
      return res
        .status(404)
        .json({ success: false, error: "Employer not found" });
    }
    res.status(200).json({
      success: "This Employee was successfully deleted!",
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
