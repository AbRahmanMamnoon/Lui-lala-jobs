import EmployerModel from '../models/EmployersModel.js';
import generateToken from '../utils/create-token.js';

export async function createEmployer(req, res) {
  try {
    const {
      empName,
      natureContent,
      industry,
      website,
      contactEmail,
      contactPhone,
      logo,
      description,
    } = req.body;

    const employer = await EmployerModel.create({
      empName,
      natureContent,
      industry,
      website,
      contactEmail,
      contactPhone,
      logo,
      description,
    });
    generateToken(res, employer._id);

    res.status(201).json({ success: true, data: employer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

export async function getAllEmployers(req, res) {
  try {
    const employers = await EmployerModel.find();
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
    const employer = await EmployerModel.findById(req.params.id);
    if (!employer) {
      return res
        .status(404)
        .json({ success: false, error: 'Employer not found' });
    }
    res.status(200).json({ success: true, data: employer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

export async function updateEmployer(req, res) {
  try {
    const employer = await EmployerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!employer) {
      return res
        .status(404)
        .json({ success: false, error: 'Employer not found' });
    }
    res.status(200).json({
      success: 'Employes were successfully updated!',
      data: employer,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

export async function deleteEmployer(req, res) {
  try {
    const employer = await EmployerModel.findByIdAndDelete(req.params.id);
    if (!employer) {
      return res
        .status(404)
        .json({ success: false, error: 'Employer not found' });
    }
    res.status(200).json({
      success: 'This Employee was successfully deleted!',
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
