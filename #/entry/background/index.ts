import { CONTENT_PORT, PANEL_PORT } from '#/constants';
import browserActionOnClickPipeline from './pipelines/browserActionOnClickPipeline';
import injectPipeline from './pipelines/injectPipeline';
import panelPipeline from './pipelines/panelPipeline';

chrome.runtime.onConnect.addListener(port => {
  switch (port.name) {
    case CONTENT_PORT: {
      port.onMessage.addListener(injectPipeline);
      chrome.browserAction.onClicked.addListener(
        browserActionOnClickPipeline(port),
      );
      return;
    }
    case PANEL_PORT: {
      port.onMessage.addListener(panelPipeline);
      return;
    }
  }
});
