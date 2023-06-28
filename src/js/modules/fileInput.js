export function fileInput(){
    const input = document.querySelector("input[type=file]");
    const preview = document.querySelector(".preview");
    input.addEventListener("change", updateImageDisplay);


    function updateImageDisplay () {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        
        const curFiles = input.files;
        
        if (curFiles.length === 0) {
            const para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
        } else {
            for (const file of curFiles) {
                const preview = document.querySelector(".preview");
                const para = document.createElement("p");
                if (validFileType(file)) {
                    para.textContent = `${file.name}`;
                    preview.appendChild(para);
            } else {
                para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
                preview.appendChild(para);
            }
                preview.appendChild(para);
            }
        }
    }

    const fileTypes = [
        "image/jpeg",
        "image/png",
    ];
    
    function validFileType(file) {
        return fileTypes.includes(file.type);
    }
}