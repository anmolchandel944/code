const copyBtn = document.getElementById('copy-btn');
const codeContent = document.getElementById('code-content');

copyBtn.addEventListener('click', () => {
    const codeText = codeContent.textContent;
    const textArea = document.createElement('textarea');
    textArea.value = codeText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
});