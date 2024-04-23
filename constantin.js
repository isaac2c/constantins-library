// Files

//Remember to escape forward slashes when passing fileLink as an argument.

let fileDirectory;
let newLink;
let newImage;
let newFigure;
let newCaption;

function newFile(fileName, fileType, fileLink) {
    const fileTypes = [
        {source: "\/uploaded-resources\/audio-transparent.png", alternative: "Audio file icon."},
        {source: "\/uploaded-resources\/pdf-transparent.png", alternative: "PDF icon."},
        {source: "\/uploaded-resources\/document-transparent.png", alternative: "Text document icon."},
        {source: "\/uploaded-resources\/spreadsheet-transparent.png", alternative: "Spreadsheet icon."},
        {source: "\/uploaded-resources\/image-transparent.png", alternative: "Image file icon."}
    ];
    fileDirectory = document.querySelector("#file-directory");
    newLink = document.createElement("a");
    newLink.setAttribute("href", fileLink);
    newLink.setAttribute("download", fileName);
    newFigure = document.createElement("figure");
    newImage = document.createElement("img");
    newImage.className += " doc-icon";
    newImage.setAttribute("src", fileTypes[fileType].source);
    newImage.setAttribute("alt", fileTypes[fileType].alternative);
    newCaption = document.createElement("figcaption");
    newCaption.innerText = fileName;
    newFigure.append(newImage, newCaption);
    newLink.append(newFigure);
    fileDirectory.append(newLink);
}

// Test file creation

function testFile() {
    newFile("new-test-file.pdf", 1, "\/uploaded-resources\/downloadable-files\/example-pdf.pdf");
}
const testCreate = document.querySelector("#login-form");
testCreate.setAttribute("onsubmit", "testFile()");