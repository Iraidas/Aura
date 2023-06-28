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
            para.textContent = "Прикрепить работы (.jpeg / .png)";
            preview.appendChild(para);
        } else {
            for (const file of curFiles) {
                const para = document.createElement("p");
                if (validFileType(file)) {
                    para.textContent = `${file.name}`;
                    preview.appendChild(para);
            } else {
                para.textContent = `${file.name}: недопустимый тип файла. Выберите другой.`;
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