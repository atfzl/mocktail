// tslint:disable-next-line:no-console
console.log('devtools');

chrome.devtools.panels.create('MyPanel', '', 'panel.html');
