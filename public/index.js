import TextBuffer from '/src/components/Text-Buffer.js';


const buffer = new TextBuffer();
// Temporary placeholder logic — will be replaced by TextBuffer soon
const editor = document.getElementById("editor");
editor.addEventListener("input", () => {
  const lines = editor.value.split('\n');
  buffer.replaceAll(lines);
  updateArrayVisual();
});

function updateArrayVisual() {
  const visual = document.getElementById("array-visual");
  const lines = buffer.getAllLines();
  const count = buffer.getLineCount();
  
  visual.innerHTML = `
    <strong>Line Count:</strong> ${count}<br>
    <strong>Lines:</strong><br>
    ${lines.map((line, index) => `[${index}]: "${line}"`).join('<br>')}
  `;
}

const btnInsert = document.getElementById("btn-insert");
const btnDelete = document.getElementById("btn-delete");
const btnModify = document.getElementById("btn-modify");

btnInsert.addEventListener("click", () => {
 const index = parseInt(prompt("Enter line index to insert at:"));
 const text = prompt("Enter text to insert:");

 if(index !== null && text !== null) {
   buffer.insertLine(index, text);
   updateArrayVisual();
 }
});

btnDelete.addEventListener("click", () => {
 const index = parseInt(prompt("Enter line index to delete:"));

 if(index !== null) {
   buffer.deleteLine(index);
   updateArrayVisual();
 }
});

btnModify.addEventListener("click", () => {
 const index = parseInt(prompt("Enter line index to delete:"));
 const text = prompt("Enter the new text:");

 if(index !== null && text !== null) {
   buffer.modifyLine(index, text);
   updateArrayVisual();
 }
});
