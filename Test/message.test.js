const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const Message = require('../Tutor_Linkup/backend/models/message');

describe('Message Model Tests', function() {
    before(function(done) {
        mongoose.connect('mongodb://localhost/testDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection
            .once('open', () => done())
            .on('error', (error) => {
                console.warn('Error', error);
            });
    });

    it('should create a new message with required fields', function() {
        const messageData = {
            from: mongoose.Types.ObjectId(),
            to: mongoose.Types.ObjectId(),
            content: 'Hello world',
            isGroup: false,
            read: false,
            conversationId: mongoose.Types.ObjectId(),
            messageType: 'text'
        };

        const message = new Message(messageData);

        expect(message.from).to.exist;
        expect(message.to).to.exist;
        expect(message.content).to.equal('Hello world');
        expect(message.isGroup).to.be.false;
        expect(message.read).to.be.false;
        expect(message.conversationId).to.exist;
        expect(message.messageType).to.equal('text');
    });

    it('should validate that content is required', function() {
        const messageData = {
            from: mongoose.Types.ObjectId(),
            to: mongoose.Types.ObjectId(),
            // content is intentionally left out to test validation
        };

        const message = new Message(messageData);

        message.validate((err) => {
            expect(err.errors.content).to.exist;
        });
    });

    it('should validate messageType is one of the enum values', function() {
        const messageData = {
            from: mongoose.Types.ObjectId(),
            to: mongoose.Types.ObjectId(),
            content: 'Some content',
            messageType: 'invalidType' // Invalid messageType
        };

        const message = new Message(messageData);

        message.validate((err) => {
            expect(err.errors.messageType).to.exist;
        });
    });

    // Add more tests based on your requirements

    after(function(done) {
        mongoose.disconnect();
        done();
    });
});
