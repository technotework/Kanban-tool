import { action, styled, withKnobs, text, color, boolean, number, withInfo } from "@/components/utils/story-export"

/**===========================================
 * デフォルトストーリーを生成する
===========================================*/
function createDefStory(title, compo) {

    let compoObj = {};
    compoObj[name] = compo;

    let obj = {
        title: title,
        component: compoObj,
        decorators: [withKnobs, withInfo],
        parameters: {
            info: {},
        }

    }
    return obj;
}

export { createDefStory }


/**===========================================
 * 個別ストーリーを生成する
===========================================*/

let maps = {
    w: { val: "width", type: text },
    mw: { val: "minWidth", type: text },
    mxw: { val: "maxWidth", type: text },
    h: { val: "height", type: text },
    mh: { val: "minHeight", type: text },
    mxh: { val: "maxHeight", type: text },
    c: { val: "color", type: color },
    bgc: { val: "backgroundColor", type: color },
    p: { val: "padding", type: text },
    r: { val: "round", type: text },
    pt: { val: "top", type: text },
    pb: { val: "bottom", type: text },
    pl: { val: "left", type: text },
    pr: { val: "right", type: text },
    id: { val: "id", type: text },
    name: { val: "name", type: text },
    value: { val: "value", type: text },
    href: { val: "href", type: text },
    target: { val: "target", type: text },
    for: { val: "for", type: text },
    required: { val: "required", type: boolean },
    compose: { val: "compose", type: text },
    url: { val: "url", type: text },
    src: { val: "src", type: text },
    alt: { val: "alt", type: text },
    placeholder: { val: "placeholder", type: text },
}

let createStory = function (compo, compoName, propsObj, actionObj = null, slot = false, contents = "contents") {

    let template = createTemplate(compoName, propsObj, actionObj, slot, contents);
    let p = createProps(propsObj, slot, contents);
    let action = createAction(actionObj);

    let name = compoName;
    let compoObj = {};
    compoObj[name] = compo;


    let result = {
        components: compoObj,
        props: p,
        template: template
    };

    if (Object.keys(action).length != 0) {

        result["methods"] = action;
    }

    return result

}

export { createStory }

function createTemplate(compo, propsObj, actionObj, slot, contents) {

    let start = `<${compo}`
    let action = (actionObj != null && Object.keys(actionObj).length != 0) ? `@${actionObj.event}="action"` : ``;
    let close = slot ? `>${contents}</${compo}>` : `/>`;
    let binds = function () {

        let ary = [];
        for (const key in propsObj) {

            if (maps.hasOwnProperty(key)) {
                ary.push(maps[key].val);
            }
        }

        let result = "";
        if (ary.length > 0) {

            let propsString = ary.join(",");
            result = `v-bind={${propsString}}`;
        }

        return result;
    }

    return `${start} ${action} ${binds()} ${close}`

}

function createProps(propsObj, slot, contents) {

    let obj = {};
    for (const key in propsObj) {

        if (maps.hasOwnProperty(key)) {

            obj[maps[key].val] = { default: maps[key].type(maps[key].val, propsObj[key]) }

        }
        if (slot) {

            obj["contents"] = { default: text("contents", contents) }
        }
    }

    return obj
}

function createAction(actionObj) {
    let obj = {};
    if (actionObj != null && Object.keys(actionObj).length != 0) {
        let event = actionObj.event;
        obj["action"] = action(event);
    }

    return obj;
}
