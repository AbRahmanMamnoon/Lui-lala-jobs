const { query } = require("express");
const Job = require("../models/jobsModel");

exports.findJobs = async (req, res) => {
  try {
    const {
      title,
      keyword,
      country,
      city,
      minSalary,
      maxSalary,
      jobType,
      salaryType,
      industry,
      location,
      company,
    } = req.query;
    const queryObject = {};

    if (title) {
      queryObject.title = { $regex: title, $options: "i" };
    }

    if (keyword) {
      queryObject.keyword = { $regex: keyword, $options: "i" };
    }

    if (country) {
      queryObject.country = { $regex: country, $options: "i" };
    }

    if (city) {
      queryObject.city = { $regex: city, $options: "i" };
    }

    if (minSalary) {
      queryObject.minSalary = { $gte: minSalary };
    }

    if (maxSalary) {
      queryObject.maxSalary = { $lte: maxSalary };
    }

    if (jobType) {
      queryObject.jobType = { $regex: jobType, $options: "i" };
    }

    if (salaryType) {
      queryObject.salaryType = { $regex: salaryType, $options: "i" };
    }

    if (industry) {
      queryObject.industry = { $regex: industry, $options: "i" };
    }

    if (location) {
      queryObject.location = { $regex: location, $options: "i" };
    }

    if (company) {
      queryObject.company = { $regex: company, $options: "i" };
    }

    const jobs = await Job.find(queryObject);
    res.status(200).json({
      length: jobs.length,
      jobs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// This function FOR to get all industry jobs
exports.getIndustries = async (req, res) => {
  const industries = await Job.distinct("industry");
  res.status(200).json({
    length: industries.length,
    industries,
  });
};

exports.getCompanys = async (req, res) => {
  const companys = await Job.distinct("company");
  res.status(200).json({
    length: companys.length,
    companys,
  });
};

exports.getLocations = async (req, res) => {
  const locations = await Job.distinct("location");
  res.status(200).json({
    length: locations.length,
    locations,
  });
};
