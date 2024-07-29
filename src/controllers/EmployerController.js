import { create, find, findById, findByIdAndUpdate, findByIdAndDelete } from "../models/EmployersModel";

export async function createEmployer(req, res) {
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

    const employer = await create({
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
}

export async function getEmployers(req, res) {
  try {
    const employers = await find();
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
}

export async function getEmployer(req, res) {
  try {
    const employer = await findById(req.params.id);
    if (!employer) {
      return res
        .status(404)
        .json({ success: false, error: "Employer not found" });
    }
    res.status(200).json({ success: true, data: employer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

export async function updateEmployer(req, res) {
  try {
    const employer = await findByIdAndUpdate(req.params.id, req.body, {
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
}

export async function deleteEmployer(req, res) {
  try {
    const employer = await findByIdAndDelete(req.params.id);
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
}
