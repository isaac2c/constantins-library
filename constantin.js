// Files

//Remember to escape forward slashes when passing fileLink as an argument.

// DATA STRUCTURE - ROOT
// This data structure contains information about the contents of the root directory.



let currentDirectory = ""
function updateCurrentDirectory(clickedFolder) {
    currentDirectory = (clickedFolder)
}


// NEW FILE
// This function makes a selected file stored on the server available for download from the Constantin's Library File Manager.

function newFile(fileName, fileType, fileLink) {
    const fileTypes = [
        {source: "\/uploaded-resources\/audio-transparent.png", alternative: "Audio file icon."},
        {source: "\/uploaded-resources\/pdf-transparent.png", alternative: "PDF icon."},
        {source: "\/uploaded-resources\/document-transparent.png", alternative: "Text document icon."},
        {source: "\/uploaded-resources\/spreadsheet-transparent.png", alternative: "Spreadsheet icon."},
        {source: "\/uploaded-resources\/image-transparent.png", alternative: "Image file icon."}
    ];
    const fileDirectory = document.querySelector("#file-directory");
    const newLink = document.createElement("a");
    newLink.setAttribute("href", fileLink);
    newLink.setAttribute("download", fileName);
    const newFigure = document.createElement("figure");
    const newImage = document.createElement("img");
    newImage.className += " doc-icon";
    newImage.setAttribute("src", fileTypes[fileType].source);
    newImage.setAttribute("alt", fileTypes[fileType].alternative);
    const newCaption = document.createElement("figcaption");
    newCaption.innerText = fileName;
    newFigure.append(newImage, newCaption);
    newLink.append(newFigure);
    fileDirectory.append(newLink);
}

// NEW FOLDER
// This function makes a selected folder stored on the server visible within the Constantin's Library File Manager.

function newFolder(folderName) {
    const folderDirectory = document.querySelector("#folder-directory");
    const folderLink = document.createElement("a");
    folderLink.setAttribute("href", "#");
    folderLink.onclick = updateCurrentDirectory(folderName);
    /*folderLink.setAttribute("id", folderName + "-link")*/
    const folderFigure = document.createElement("figure");
    const folderImage = document.createElement("img");
    folderImage.className += " doc-icon";
    folderImage.setAttribute("src", "/uploaded-resources/folder-transparent.png");
    folderImage.setAttribute("alt", "Folder icon.");
    const folderCaption = document.createElement("figcaption");
    folderCaption.innerText = folderName;
    folderFigure.append(folderImage, folderCaption);
    folderLink.append(folderFigure);
    folderDirectory.append(folderLink);
}

// CLEAR DIRECTORIES
// This function empties the file and folder directories, as displayed on the Constantin's Library File Manager.

function clearDirectories() {
    const clearedDirectories = [document.querySelector("#file-directory"), document.querySelector("#folder-directory")]
    for (const clearedDirectory of clearedDirectories) {
        while (clearedDirectory.hasChildNodes()) {
            clearedDirectory.removeChild(clearedDirectory.firstChild)
        }
    }
}

// CHANGE DIRECTORY
// This function combines the above functions to change what the user sees when they select a new folder.

function changeDirectory() {
    clearDirectories();

}

// Test file creation

testButton = document.createElement("button");
testButton.innerText = "Test";
testFooter = document.querySelector("footer");
testFooter.append(testButton);
newFolder("testing-folder")
testTestFolder = console.log(currentDirectory);
testButton.onclick = testTestFolder
