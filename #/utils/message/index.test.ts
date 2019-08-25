import { postMessage, receiveMessage } from '.';

describe('postMessage', () => {
  it('default', async done => {
    const stopReceivingMessages = receiveMessage(async payload => {
      expect(payload).toMatchSnapshot();
    });

    await postMessage({ some: 'message' });

    stopReceivingMessages();

    done();
  });

  it('with a reply', async done => {
    const stopReceivingMessages = receiveMessage(async payload => {
      expect(payload).toMatchSnapshot();
      return { replyMessage: '1' };
    });

    const reply = await postMessage({ some: 'new message' });

    expect(reply).toMatchSnapshot();

    stopReceivingMessages();

    done();
  });
});
