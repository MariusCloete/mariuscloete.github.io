function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const text = codeElement.innerText;
  
    navigator.clipboard.writeText(text);
  }