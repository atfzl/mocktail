if (process.env.NODE_ENV !== 'production') {
  // tslint:disable-next-line:no-var-requires
  require('#/entry/background/hotReload');
}

import { CONTENT_PORT, PANEL_PORT } from '#/constants';
import browserActionOnClickPipeline from './pipelines/browserActionOnClick';
import injectPipeline from './pipelines/inject';
import panelPipeline from './pipelines/panel';

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
