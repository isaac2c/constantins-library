indirectEval = eval;

///*
// DATA STRUCTURE - EXAMPLE
// This data structure contains information about the contents of some example directories.


folderExampleRoot = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "example-root", path: "\/uploaded-resources\/downloadable-files\/example-root\/"},
    [
        // Folder directory contents:
        {ref: "folderExampleFolder1", name: "example-folder-1"},
    ],
    [
        //File directory contents:
        {name: "example-audio-file.mp3", type: 0},
        {name: "example-pdf.pdf", type: 1},
        {name: "example-text-document.txt", type: 2},
        {name: "example-spreadsheet.csv", type: 3},
        {name: "example-image.png", type: 4}
    ]
];
folderExampleFolder1 = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "example-folder-1", path: "\/uploaded-resources\/downloadable-files\/example-root\/"},
    [
        // Folder directory contents:
        {ref: "folderExampleRoot", name: ".."},
        {ref: "folderExampleFolder2", name: "example-folder-2"}
    ],
    [
        //File directory contents:
    ]
];
folderExampleFolder2 = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "example-folder-2", path: "\/uploaded-resources\/downloadable-files\/example-root\/"},
    [
        // Folder directory contents:
        {ref: "folderExampleFolder1", name: ".."},
        {ref: "folderExampleFolder3", name: "example-folder-3"}
    ],
    [
        //File directory contents:
    ]
];
folderExampleFolder3 = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "example-folder-3", path: "\/uploaded-resources\/downloadable-files\/example-root\/"},
    [
        // Folder directory contents:
        {ref: "folderExampleFolder2", name: ".."},
        {ref: "folderExampleFolder4", name: "example-folder-4"}
    ],
    [
        //File directory contents:
    ]
];
folderExampleFolder4 = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "example-folder-4", path: "\/uploaded-resources\/downloadable-files\/example-root\/"},
    [
        // Folder directory contents:
        {ref: "folderExampleFolder3", name: ".."}
    ],
    [
        //File directory contents:
    ]
];

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

function newFolder(folderRef, folderName) {
    const folderDirectory = document.querySelector("#folder-directory");
    const folderLink = document.createElement("a");
    folderLink.setAttribute("href", "#");
    folderLink.onclick = function () {
        changeDirectory(folderRef);
    };
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

// UPDATE FOLDER TREE
// This function updates the displayed folder hierarchy to assist with navigation.

function updateFolderTree(currentFolder) {
    let searchFolder = currentFolder;
    function identifyParent(childFolder) {
        return childFolder.name === "..";
    }
    while (searchFolder.find(identifyParent)) {
        console.log(searchFolder);
        searchFolder = indirectEval(searchFolder.find(identifyParent).ref).name;
    }
    console.log(searchFolder);

}

// CHANGE DIRECTORY
// This function combines the above functions to change what the user sees when they select a new folder.

function changeDirectory(targetFolder) {
    clearDirectories();
    for (const iFolder of targetFolder[1]) {
        newFolder(indirectEval(iFolder.ref), iFolder.name);
    }
    for (const iFile of targetFolder[2]) {
        const newPath =  targetFolder[0].path + iFile.name;
        newFile(iFile.name, iFile.type, newPath);
    }
}

// TESTING PROTOCOL

changeDirectory(folderExampleRoot);
updateFolderTree(folderExampleFolder4);