const formController = document.getElementById("formController");
const containerCode = document.querySelector(".__preview_code");
const boxPreview = document.querySelector(".__box_preview");
const btnCopy = document.getElementById("copy");

let code = {
  size: formController.size.value,
  borderTopLeft: formController.borderTopLeft.value,
  borderTopRight: formController.borderTopRight.value,
  borderBottomLeft: formController.borderBottomLeft.value,
  borderBottomRight: formController.borderBottomRight.value,
};

formController.addEventListener("input", (e) => {
  e.preventDefault();

  code.size = formController.size.value;
  code.borderTopLeft = formController.borderTopLeft.value;
  code.borderTopRight = formController.borderTopRight.value;
  code.borderBottomLeft = formController.borderBottomLeft.value;
  code.borderBottomRight = formController.borderBottomRight.value;

  boxPreview.style.width = `${code.size}px`;
  boxPreview.style.height = `${code.size}px`;

  boxPreview.style.borderTopLeftRadius = `${code.borderTopLeft / 2}%`;
  boxPreview.style.borderTopRightRadius = `${code.borderTopRight / 2}%`;
  boxPreview.style.borderBottomLeftRadius = `${code.borderBottomLeft / 2}%`;
  boxPreview.style.borderBottomRightRadius = `${code.borderBottomRight / 2}%`;

  containerCode.innerHTML = `
      <span class="declaration">size</span><span class="token value">: ${code.size}px;</span>
      <span class="declaration">border-top-left-radius</span><span class="token value">: ${code.borderTopLeft}px;</span>
      <span class="declaration">border-top-right-radius</span><span class="token value">: ${code.borderTopRight}px;</span>
      <span class="declaration">border-bottom-left-radius</span><span class="token value">: ${code.borderBottomLeft}px;</span>
      <span class="declaration">border-bottom-right-radius</span><span class="token value">: ${code.borderBottomRight}px;</span>
      `;
  formController.code.value = `
      size: ${code.size}px;
      border-top-left-radius: ${code.borderTopLeft / 2}px;
      border-top-right-radius: ${code.borderTopRight / 2}px;
      border-bottom-left-radius: ${code.borderBottomLeft / 2}px;
      border-bottom-right-radius: ${code.borderBottomRight / 2}px;
      `;
});

btnCopy.addEventListener("click", () =>
  copyClipboard(formController.code.value)
);
const copyClipboard = (text) => {
  if (!navigator.clipboard) {
    copyClipboard(text);
    console.log("maybe fail");
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    console.log("success", text);
  });
};
