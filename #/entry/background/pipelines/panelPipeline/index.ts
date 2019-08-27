const panelPipeline: (
  message: { type: string; payload: any },
  port: chrome.runtime.Port,
) => void = (message, port) => {
  console.info('message received from panel: ', message);
  port.postMessage('for panel from bg');
  switch (message.type) {
    default: {
      return;
    }
  }
};

export default panelPipeline;
