const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const conversationController = require('../Tutor_Linkup/backend/controllers/conversationController');
const conversation = require("../models/conversation");
const asyncHandler = require("express-async-handler");

describe('Conversation Controller Tests', function () {
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

    it('should create a new conversation', async function () {
        const newConversation = { participants: ['123'], isGroup: false, name: 'Test Conversation' };
        sinon.stub(conversation, 'create').resolves(newConversation);

        req = { body: newConversation };

        await conversationController.createConversation(req, res);

        expect(conversation.create.calledOnce).to.be.true;
        expect(res.status.calledWith(201)).to.be.true;
        expect(res.json.calledWith(newConversation)).to.be.true;
    });

    it('should get a conversation by ID', async function () {
        const conversationData = { _id: '12345', participants: ['123'], isGroup: false, name: 'Test Conversation' };
        sinon.stub(conversation, 'findById').resolves(conversationData);

        req = { params: { conversationId: '12345' } };

        await conversationController.getConversation(req, res);

        expect(conversation.findById.calledWith('12345')).to.be.true;
        expect(res.json.calledWith(conversationData)).to.be.true;
    });

    it('should return 404 for a non-existent conversation', async function () {
        sinon.stub(conversation, 'findById').resolves(null);

        req = { params: { conversationId: 'nonexistentId' } };

        await conversationController.getConversation(req, res);

        expect(conversation.findById.calledWith('nonexistentId')).to.be.true;
        expect(res.status.calledWith(404)).to.be.true;
        expect(res.send.calledWith('Conversation not found')).to.be.true;
    });

    // Add tests for getPrivateConversationsList and getGroupConversationsList

    afterEach(() => {
        sinon.restore();
    });
});
