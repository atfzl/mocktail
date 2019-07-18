export const injectScript = (script: string) => {
  const s = document.createElement('script');

  const src = chrome.extension.getURL(script);

  s.src = src;
  s.onload = () => {
    s.remove();
  };

  document.documentElement.appendChild(s);
};
