const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const conversation = require('../Tutor_Linkup/backend/models/conversation');

describe('Conversation Model Tests', function () {
    before(function (done) {
        mongoose.connect('mongodb://localhost/testDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection
            .once('open', () => done())
            .on('error', (error) => {
                console.warn('Error', error);
            });
    });

    it('should create a new conversation with required fields', function () {
        const conversationData = {
            participants: [mongoose.Types.ObjectId(), mongoose.Types.ObjectId()],
            isGroupChat: false
        };

        const conversation = new Conversation(conversationData);

        expect(conversation.participants).to.have.lengthOf(2);
        expect(conversation.isGroupChat).to.be.false;
    });

    it('should require groupName for group chats', function () {
        const conversationData = {
            participants: [mongoose.Types.ObjectId()],
            isGroupChat: true,
            // groupName is intentionally left out to test validation
        };

        const conversation = new Conversation(conversationData);

        conversation.validate((err) => {
            expect(err.errors.groupName).to.exist;
        });
    });

    it('should add a participant to the conversation', function () {
        const conversation = new Conversation({
            participants: [mongoose.Types.ObjectId()],
            isGroupChat: false
        });

        const newParticipantId = mongoose.Types.ObjectId();
        conversation.addParticipant(newParticipantId);

        expect(conversation.participants).to.include(newParticipantId);
    });

    it('should remove a participant from the conversation', function () {
        const participantIdToRemove = mongoose.Types.ObjectId();
        const conversation = new Conversation({
            participants: [mongoose.Types.ObjectId(), participantIdToRemove],
            isGroupChat: false
        });

        conversation.removeParticipant(participantIdToRemove);

        expect(conversation.participants).to.not.include(participantIdToRemove);
    });

    after(function (done) {
        mongoose.disconnect();
        done();
    });
});
