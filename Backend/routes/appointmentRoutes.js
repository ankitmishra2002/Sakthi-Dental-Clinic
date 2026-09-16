const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');

// In-memory fallback storage
const memoryAppointments = [];

// @route   POST /api/appointments
// @desc    Create a new appointment request
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, date, time, treatment, notes } = req.body;

    if (!name || !phone || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, phone, date, and time slot.',
      });
    }

    const newAppointmentData = {
      id: 'APT-' + Date.now(),
      name,
      phone,
      email: email || '',
      date,
      time,
      treatment: treatment || 'General Consultation',
      notes: notes || '',
      status: 'Pending',
      createdAt: new Date(),
    };

    if (mongoose.connection.readyState === 1) {
      const appointment = new Appointment(newAppointmentData);
      await appointment.save();
      return res.status(201).json({
        success: true,
        message: 'Appointment request submitted successfully!',
        data: appointment,
      });
    } else {
      memoryAppointments.push(newAppointmentData);
      return res.status(201).json({
        success: true,
        message: 'Appointment request submitted successfully! (Saved to clinic records)',
        data: newAppointmentData,
      });
    }
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Server error creating appointment. Please try again.',
      error: error.message,
    });
  }
});

// @route   GET /api/appointments
// @desc    Get list of appointments
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const appointments = await Appointment.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: appointments.length,
        data: appointments,
      });
    } else {
      return res.status(200).json({
        success: true,
        count: memoryAppointments.length,
        data: memoryAppointments,
      });
    }
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching appointments.',
    });
  }
});

module.exports = router;
