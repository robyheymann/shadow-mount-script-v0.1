//Get mount parameters
const mountScript = document.currentScript; //document.querySelector("script[src*='mount.js']");
const urlScript = new URL(mountScript.src);
const moduleName = urlScript.searchParams.get('mod');

//Set wrapper component
const elementWrapper = document.createElement('div');
elementWrapper.setAttribute('id', 'elementWrapper');
elementWrapper.style.backgroundColor = 'red'; //DELETE
urlScript.searchParams.forEach(function (value, key) {
  elementWrapper.setAttribute(key, value);
});
mountScript.insertAdjacentElement('afterend', elementWrapper);

//Get modulo
fetch(`${moduleName}.html${urlScript.search}`)
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    //Set shadowElement
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const template = doc.querySelector('template');
    mountScript.replaceWith(template);
    elementWrapper.attachShadow({ mode: 'open' }).appendChild(template.content);
    template.parentNode.removeChild(template);
  });

//TODO: IE Polyfill.io
