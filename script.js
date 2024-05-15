// DATA STRUCTURES
// These data structures contain information about the contents of the folders displayed on the Constantin's Library File Manager.

folderRoot = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "root", path: "\/uploaded-resources\/root\/"},
    [
        // Folder directory contents:
        {ref: "folderFragments", name: "fragments"},
        {ref: "folderVisions", name: "visions"}
    ],
    [
        //File directory contents:
    ]
];
folderFragments = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "fragments", path: "\/uploaded-resources\/root\/fragments\/"},
    [
        // Folder directory contents:
        {ref: "folderRoot", name: ".."},
        {ref: "folderVol1", name: "vol_1"},
        {ref: "folderVol2", name: "vol_2"},
        {ref: "folderVol3", name: "vol_3"}
    ],
    [
        //File directory contents:
    ]
];
folderVol1 = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "vol_1", path: "\/uploaded-resources\/root\/fragments\/vol_1\/"},
    [
        // Folder directory contents:
        {ref: "folderFragments", name: ".."},
        {ref: "folderVol1Observation", name: "vol_1_observation"},
        {ref: "folderVol1Recollection", name: "vol_1_recollection"}
    ],
    [
        //File directory contents:
        {name: "1_passwords.txt", type: 2}
    ]
];
folderVol1Observation = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "vol_1_observation", path: "\/uploaded-resources\/root\/fragments\/vol_1\/vol_1_observation\/"},
    [
        // Folder directory contents:
        {ref: "folderVol1", name: ".."},
    ],
    [
        //File directory contents:
        {name: "1_1_jacob.pdf", type: 1},
        {name: "1_2_stephen.pdf", type: 1},
        {name: "1_3_abigail.pdf", type: 1},
        {name: "1_4_jacob.pdf", type: 1}
    ]
];
folderVol1Recollection = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "vol_1_recollection", path: "\/uploaded-resources\/root\/fragments\/vol_1\/vol_1_recollection\/"},
    [
        // Folder directory contents:
        {ref: "folderVol1", name: ".."},
    ],
    [
        //File directory contents:
        {name: "1_5_a_beginning_of_sorts.pdf", type: 1}
    ]
];
folderVol2 = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "vol_2", path: "\/uploaded-resources\/root\/fragments\/vol_2\/"},
    [
        // Folder directory contents:
        {ref: "folderFragments", name: ".."},
        {ref: "folderVol2Observation", name: "vol_2_observation"},
        {ref: "folderVol2Recollection", name: "vol_2_recollection"}
    ],
    [
        //File directory contents:
        {name: "2_passwords.txt", type: 2}
    ]
];
folderVol2Observation = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "vol_2_observation", path: "\/uploaded-resources\/root\/fragments\/vol_2\/vol_2_observation\/"},
    [
        // Folder directory contents:
        {ref: "folderVol2", name: ".."},
    ],
    [
        //File directory contents:
        {name: "2_1_stephen.pdf", type: 1},
        {name: "2_2_abigail.pdf", type: 1}
    ]
];
folderVol2Recollection = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "vol_2_recollection", path: "\/uploaded-resources\/root\/fragments\/vol_2\/vol_2_recollection\/"},
    [
        // Folder directory contents:
        {ref: "folderVol2", name: ".."},
    ],
    [
        //File directory contents:
        {name: "2_3_on_keeping_silent.pdf", type: 1},
        {name: "2_4_on_seeing_sound.mp3", type: 0}
    ]
];
folderVol3 = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "vol_3", path: "\/uploaded-resources\/root\/fragments\/vol_3\/"},
    [
        // Folder directory contents:
        {ref: "folderFragments", name: ".."},
        {ref: "folderVol3Recollection", name: "vol_3_recollection"}
    ],
    [
        //File directory contents:
    ]
];
folderVol3Recollection = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "vol_3_recollection", path: "\/uploaded-resources\/root\/fragments\/vol_3\/vol_3_recollection\/"},
    [
        // Folder directory contents:
        {ref: "folderVol3", name: ".."},
    ],
    [
        //File directory contents:
        {name: "3_1_a_dedication.mp3", type: 0}
    ]
];
folderVisions = [
    // Folder details (Remember to escape forward slashes in path):
    {name: "visions", path: "\/uploaded-resources\/root\/visions\/"},
    [
        // Folder directory contents:
        {ref: "folderRoot", name: ".."}
    ],
    [
        //File directory contents:
        {name: "lights_1.png", type: 4},
        {name: "lights_2.png", type: 4},
        {name: "lights_3.png", type: 4},
        {name: "lights_4.png", type: 4},
        {name: "lights_5.png", type: 4},
        {name: "lights_6.png", type: 4},
    ]
];

// EARLY DECLARATIONS
// These are variables used elsewhere that must be declared early.

indirectEval = eval;
let folderTreeSnapshot = document.querySelector("#folder-tree").innerHTML;

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
    const nameArray = [];
    const targetArray = [];
    const folderTree = document.querySelector("#folder-tree");
    let searchFolder = currentFolder;
    function identifyParent(childFolder) {
        return childFolder.name === "..";
    }
    while (searchFolder[1].some(identifyParent)) {
        nameArray.unshift(searchFolder[0].name + "\/");
        targetArray.unshift(searchFolder);
        searchFolder = indirectEval(searchFolder[1].find(identifyParent).ref);
    }
    nameArray.unshift(searchFolder[0].name + "\/");
    targetArray.unshift(searchFolder);
    for (const pathFolders of nameArray) {
        const newTreeLayer = document.createElement("a");
        newTreeLayer.setAttribute("href", "#");
        newTreeLayer.onclick = function () {
            changeDirectory(targetArray[nameArray.indexOf(pathFolders)]);
        };
        newTreeLayer.innerText = pathFolders;
        folderTree.appendChild(newTreeLayer);
    }

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
    document.querySelector("#folder-tree").innerHTML = folderTreeSnapshot;
    updateFolderTree(targetFolder);
}

//LOGIN FORM
// This section controls the effects of the user's interaction with the login form.

loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", nonSubmit);
function nonSubmit(event) {
    event.preventDefault(event);
    if (loginForm[1].value == "admin@constantinslibrary.com") {
        if (loginForm[2].value == "forward") {
            changeDirectory(folderRoot);
            document.querySelector("#notable-quote").style.display = "none";
            document.querySelector("#main-container").style.display = "block";
            loginForm.style.display = "none";
            loginForm[1].value = "";
            loginForm[2].value = "",
            logoutButton = document.createElement("img");
            logoutButton.setAttribute("src", "\/uploaded-resources\/logout-symbol-transparent.png");
            logoutButton.setAttribute("alt", "Logout.");
            logoutButton.setAttribute("class", "login-symbol")
            logoutButton.style.margin = "1em";
            logoutButton.style.cursor = "pointer";
            logoutButton.onclick = function() {
                logoutButton.remove();
                loginForm.style.display = "block";
                document.querySelector("#main-container").style.display = "none";
                document.querySelector("#notable-quote-text").innerText = "The art of the observer is to bring hidden things to light."
                document.querySelector("#notable-quote-citation").innerHTML = "-Søren Kierkegaard, <cite>Repetition<\/cite>, p. 9"
                document.querySelector("#notable-quote").style.display = "block"
            };
            document.querySelector("header").appendChild(logoutButton);
        } else {
            alert("Incorrect credentials - check username and password.");
        }
    } else {
        alert("Incorrect credentials - check username and password.");
    }
}