// Common JS - fetches from GitHub raw content
if(!window.commonJsLoaded) {
  console.log('Loading common.js from GitHub');
  fetch('https://raw.githubusercontent.com/GuruCharan-007/html-final/main/common.js')
    .then(r => r.text())
    .then(code => eval(code))
    .catch(e => console.error('Failed to load common.js:', e));
  window.commonJsLoaded = true;
}
