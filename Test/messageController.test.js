const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const messageController = require('../Tutor_Linkup/backend/controllers/messageController');
const messages = require("../models/messages");

describe('Message Controller Tests', function () {
    let req, res, statusSpy, jsonSpy, sendSpy;

    beforeEach(() => {
        statusSpy = sinon.spy();
        jsonSpy = sinon.spy();
        sendSpy = sinon.spy();
        res = {
            status: sinon.stub().returns({ json: jsonSpy, send: sendSpy }),
            json: jsonSpy,
            send: sendSpy
        };
    });

    it('should send a message', async function () {
        const newMessage = { from: '123', to: '456', content: 'Hello', isGroup: false };
        sinon.stub(messages, 'create').resolves(newMessage);

        req = { body: newMessage };

        await messageController.sendMessage(req, res);

        expect(messages.create.calledOnce).to.be.true;
        expect(res.status.calledWith(201)).to.be.true;
        expect(res.json.calledWith(newMessage)).to.be.true;
    });

    // Tests for getGroupMessage
    it('should retrieve a group message by ID', async function () {
        const messageData = { _id: 'message123', from: '123', to: 'group456', content: 'Hello Group', isGroup: true };
        sinon.stub(messages, 'findOne').resolves(messageData);

        req = { params: { messageId: 'message123' } };

        await messageController.getGroupMessage(req, res);

        expect(messages.findOne.calledWith({ _id: 'message123', isGroup: true })).to.be.true;
        expect(res.json.calledWith(messageData)).to.be.true;
    });

    // Tests for getPrivateMessage
    it('should return 404 for a non-existent private message', async function () {
        sinon.stub(messages, 'findOne').resolves(null);

        req = { params: { messageId: 'nonexistentId' } };

        await messageController.getPrivateMessage(req, res);

        expect(messages.findOne.calledWith({ _id: 'nonexistentId', isGroup: false })).to.be.true;
        expect(res.status.calledWith(404)).to.be.true;
        expect(res.send.calledWith('Message not found')).to.be.true;
    });

    // Add tests for getGroupMessagesList and getPrivateMessagesList

    afterEach(() => {
        sinon.restore();
    });
});
