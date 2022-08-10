const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'asensia', 
    api_key: '897198866438371', 
    api_secret: 'QaWe9umMNR3Zb4c4JZ1bb0rviVc' 
  });
module.exports = cloudinary;