let jsonFile = [];

function colorsJsonCreator(){
    let colors = [...document.querySelectorAll('.collection-assets-item .content')];
    let colorGroup;

    for (arrayNumber=0; arrayNumber <= 49; arrayNumber++) {
        let arrayColor = [];
        let palletName = "";
        let pallete = {};
        
        colorGroup = colors[arrayNumber].querySelectorAll('.frame div');
        
        palletName = colors[arrayNumber].querySelector('.assets-item-meta .name .ctooltip').innerHTML;
        
        for(x=0; x <= colorGroup.length-1; x++){
            let hexColor =  rgb2hex(colorGroup[x].style.background)
            arrayColor.push(hexColor);
        }
        
        
        pallete = {"title": palletName.trim(), "swatches": arrayColor};
        jsonFile.push(pallete)
    }
    
    download(jsonFile)
    
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function download(jsonText) {
    let a = document.createElement("a");
    let file = new Blob([JSON.stringify(jsonText)], {type: "text/plain"});
    a.href = URL.createObjectURL(file);
    a.download = "colors.json";
    a.click();
}