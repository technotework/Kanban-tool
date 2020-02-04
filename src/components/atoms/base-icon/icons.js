import CloseIcon from "@/assets/svg/close.svg"

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

    return img;
}

export {getIcon} 