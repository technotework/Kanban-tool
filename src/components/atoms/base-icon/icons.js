import CloseIcon from "@/assets/svg/sprite.svg"

const ICON = {

    CLOSE:{type:"close",img:CloseIcon}

}

const getIcon = function(type){

    let img;

    switch (type) {
        case ICON.CLOSE.type:
        
        img = ICON.CLOSE.img;
        break;
    
        default:
            break;
    }

    return `<svg><use xmlns:xlink="http://www.w3.org/1999/xlink"  xlink:href="${CloseIcon}#close"></use></svg>`;
}

export {getIcon} 