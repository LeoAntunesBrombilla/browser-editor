import TextBuffer from '../src/components/Text-Buffer.js';

console.log("Editor initialized");

// Temporary placeholder logic — will be replaced by TextBuffer soon
const editor = document.getElementById("editor");
editor.addEventListener("input", () => {
  console.log("Editor content updated");
  updateArrayVisual();
});

// Simple "array visualization" just for initial testing
function updateArrayVisual() {
  const text = editor.innerText.split("\n");
  const visual = document.getElementById("array-visual");

  visual.innerHTML = `
    <h3>Array (TextBuffer)</h3>
    <pre>${JSON.stringify(text, null, 2)}</pre>
  `;
}
