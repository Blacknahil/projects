const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agencySchema = new Schema ({
    businessInformation: {
        type: String,
    
    },
    tutorsDescription: {
        type: String,
    }
});

const agency = mongoose.model("agency", agencySchema);
module.exports = agency;