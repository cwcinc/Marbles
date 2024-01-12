// content.js
console.log('Content script loaded');

document.body.style.backgroundColor = 'lightblue';

oldscript = document.querySelectorAll("script")[2]
const newScript = document.createElement('script');
newScript.text = `

console.log("hi");
  
`;
oldscript.parentNode.replaceChild(newScript, oldscript);
