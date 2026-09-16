const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/Contact');

// In-memory fallback storage
const memoryContacts = [];

// @route   POST /api/contact
// @desc    Submit contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone number are required.',
      });
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    const contactData = {
      id: 'MSG-' + Date.now(),
      name,
      email,
      phone,
      message: message || '',
      createdAt: new Date(),
    };

    if (mongoose.connection.readyState === 1) {
      const contact = new Contact(contactData);
      await contact.save();
      return res.status(201).json({
        success: true,
        message: 'Thank you for reaching out! We have received your message and will respond shortly.',
        data: contact,
      });
    } else {
      memoryContacts.push(contactData);
      return res.status(201).json({
        success: true,
        message: 'Thank you for reaching out! We have received your message and will respond shortly.',
        data: contactData,
      });
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Server error processing your request.',
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact submissions
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: contacts.length,
        data: contacts,
      });
    } else {
      return res.status(200).json({
        success: true,
        count: memoryContacts.length,
        data: memoryContacts,
      });
    }
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching contact messages.',
    });
  }
});

module.exports = router;
