// content.js
console.log('Content script loaded');

document.body.style.backgroundColor = 'lightblue';

oldscript = document.querySelectorAll("script")[2]
const newScript = document.createElement('script');
newScript.text = `

console.log("hi");
  
`;
oldscript.parentNode.replaceChild(newScript, oldscript);

function changePageCSS() {
  console.log("Changing CSS");
  const newStylesheet = document.createElement('link');
  newStylesheet.rel = 'stylesheet';
  newStylesheet.type = 'text/css';
  newStylesheet.href = 'newstyle.css';
  document.head.appendChild(newStylesheet);
}
