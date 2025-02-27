const commands = {
  ls: [
    `resume - Drive link to my resume in PDF format`,
    `contact - get my contact details`,
  ],
  resume: ["Opening resume in another tab..."],
  contact: [
    "Full name: Tarang Patil",
    "E-Mail: tarangpatil09@gmail.com",
    "Phone no: +91 942-320-9584",
  ],
};

const terminalDiv = document.querySelector("#terminal-div");
const terminalForm = document.forms[0];
terminalForm["terminal-input"].value = "";

terminalDiv.addEventListener("click", () => {
  document.querySelector("#terminal-input").focus();
});

function addLine(line) {
  const newLine = document.createElement("p");
  newLine.classList.add("text-wrap");
  newLine.innerHTML = line;
  const n = terminalDiv.childNodes.length;
  terminalDiv.insertBefore(newLine, terminalDiv.childNodes[n - 2]);
}

terminalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let { value } = terminalForm["terminal-input"];
  value = value.trim();
  if (commands[value]) {
    if (value === "resume") {
      const a = document.createElement("a");
      a.href =
        "https://drive.google.com/file/d/1NOS3u1zpTtb-9g4Tr_faGsDpEnWnyWs5/view";
      a.target = "_blank";
      a.click();
    }
    addLine(`<span class="text-[#4E9A06]">viewer@browser</span>:<span
              class="text-[#3465A4]"
              >~</span
            >$&nbsp;${value}`);
    commands[value].forEach(addLine);
    terminalForm["terminal-input"].value = "";
    const n = terminalDiv.childNodes.length;
    terminalDiv.childNodes[n - 2].scrollIntoView();
  } else {
    console.log("not found");
  }
});
