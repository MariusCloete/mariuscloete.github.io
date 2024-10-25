function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const text = codeElement.innerText;
  
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }