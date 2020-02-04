import {
  action,
  withKnobs,
  text,
  color,
  number,
  array,
  object,
  boolean,
  withInfo
} from "@/components/utils/story-export";

/**===========================================
 * デフォルトストーリーを生成する
===========================================*/
function createDefStory(title, compo, description=``) {
  let compoObj = {};
  compoObj[name] = compo;

  let obj = {
    title: title,
    component: compoObj,
    decorators: [withKnobs, withInfo],
    parameters: {
      info: {
        summary: description
      }
    }
  };
  return obj;
}

export { createDefStory };

/**===========================================
 * 個別ストーリーを生成する
===========================================*/

/**
 * ストーリーテンプレートの生成
 *
 * プロパティをアクションをうけとりテンプレートの$_tprops $_taction を置換する
 *
 * <CompoName ${'props'} ${'action'}><slot /></CompoName>
 *
 */
let createStory = function (obj) {
  let compo = obj.compos;
  let compoName = obj.name;
  let propsObj = obj.props;
  let actionObj = obj.action;
  let temp = obj.template;

  //テンプレート生成
  let template = createTemplate(compoName, propsObj, actionObj, temp);

  //プロパティ生成
  let p = createProps(propsObj);

  //メソッド生成
  let action = createAction(actionObj);

  let result = {
    components: compo,
    props: p,
    template: template
  };

  if (Object.keys(action).length != 0) {
    result["methods"] = action;
  }

  
  return result;
};

export { createStory };

/*=================================
 * テンプレート部分の構築
 =================================*/

let maps = {
  id: { val: "id", type: text },
  name: { val: "name", type: text },
  value: { val: "value", type: text },
  href: { val: "href", type: text },
  target: { val: "target", type: text },
  for: { val: "for", type: text },
  required: { val: "required", type: boolean },
  compose: { val: "compose", type: text },
  img: { val: "img", type: text },
  src: { val: "src", type: text },
  alt: { val: "alt", type: text },
  placeholder: { val: "placeholder", type: text },
  index: { val: "index", type: text },
  width: { val: "width", type: text },
  height: { val: "height", type: text },
  color: { val: "color", type: color },
};

/**======================================
 * テンプレート生成
 * @param {*} compo 
 * @param {*} propsObj 
 * @param {*} actionObj 
 * @param {*} temp 
======================================*/
function createTemplate(compo, propsObj, actionObj, temp) {
  let action = createBindAction(actionObj);
  let bind = createBindProps(propsObj);

  let template = temp({ props: bind, action: action });

  return template;
}

//バインドするアクションの生成
function createBindAction(actionObj) {
  let result = ``;
  if (actionObj != null && Object.keys(actionObj).length != 0) {
    result = `@${actionObj.event}="action"`;
  }

  return result;
}

//バインドプロパティの生成
function createBindProps(propsObj) {
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

/**======================================
 * プロパティ生成
 * @param {*} propsObj 
 ======================================*/

function createProps(propsObj) {
  let obj = {};
  for (const key in propsObj) {
    if (maps.hasOwnProperty(key)) {
      obj[maps[key].val] = {
        default: maps[key].type(maps[key].val, propsObj[key])
      };
    }
  }

  return obj;
}

/**======================================
 * メソッド生成
 * @param {*} actionObj 
 ======================================*/

function createAction(actionObj) {
  let obj = {};
  if (actionObj != null && Object.keys(actionObj).length != 0) {
    let event = actionObj.event;
    obj["action"] = action(event);
  }

  return obj;
}

/**=============================================
 * Tagged Templateをつくるための共通関数
 =============================================*/

let tagTemp = function (strings, ...keys) {
  return function (...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function (key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
};

export { tagTemp };
