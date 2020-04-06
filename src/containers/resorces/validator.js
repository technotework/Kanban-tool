/**
 *バリデーション定義ファイル
 */

import { TYPE, APP } from "@/containers/resorces/message";
let unit = 10000000;

/**
 * EntryPoint
 * エラーチェックしてエラーがあればThrowする
 *
 * @param {*} objects
 * [{data:評価データ
 * name:データ名
 * more:文字列以上
 * less:文字列以下
 * lessMB:MBリミット
 * require:必須チェック
 * email:メールチェック
 * password:パスワードチェック
 * agree:同意のbooleanチェック},の配列が入ってくる]
 *
 * @param {*} callback
 */
function validateMultiple(objects, callback) {
    //内容を評価してエラーがあれば配列で返す
    const array = getErrors(objects);

    if (array.length > 0) {
        //エラーがあればthrowする
        throw { type: "VALIDATIONS", error: array };
    } else {
        //エラーがなければcallback実行する
        callback();
    }
}

/**
 *エラーかどうかloopして評価する
 * @param {*} objects
 */
function getErrors(objects) {
    //エラーを詰め込む配列
    let errors = [];

    for (let i = 0; i < objects.length; i++) {
        let result = createValidation(objects[i]);

        for (let j = 0; j < result.length; j++) {
            errors.push(result[j]);
        }
    }

    return errors;
}

/**
 * 該当するチェック項目データを整形して配列につっこむ
 * @param {*} obj
 */
function createValidation(obj) {
    const {
        data,
        name,
        more,
        less,
        lessMB,
        require,
        email,
        password,
        agree,
    } = obj;

    let target = {};

    if (more != undefined) {
        target["more"] = { data: data, opt: { name: name, length: more } };
    }

    if (less != undefined) {
        target["less"] = { data: data, opt: { name: name, length: less } };
    }

    if ((lessMB != undefined || lessMB != null) && data != null) {
        target["lessMB"] = { data: data, opt: { name: name, length: lessMB } };
    }

    if (require) {
        target["require"] = { data: data, opt: { name: name } };
    }

    if (email) {
        target["email"] = { data: data, opt: { name: name } };
    }

    if (password) {
        target["password"] = { data: data, opt: { name: name } };
    }

    if (agree) {
        target["agree"] = { data: data, opt: { name: name } };
    }

    let array = [];
    /**
     * バリデーションチェック
     */
    for (const key in target) {
        if (validator.hasOwnProperty(key)) {
            let validateItem = validator[key](target[key]);

            if (validateItem != true) {
                array.push(validateItem);
            }
        }
    }

    return array;
}

/**
 *バリデーションチェック関数
 */
const validator = {
    require: (obj) => {
        let { data, opt } = obj;

        if (data == null || data == undefined || data == "") {
            return {
                type: TYPE.VALIDATIONS,
                error: APP.REQUIRE,
                arg: { name: opt.name },
            };
        } else {
            return true;
        }
    },
    email: (obj) => {
        let { data, opt } = obj;

        let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (data != "" && !data.match(reg)) {
            return {
                type: TYPE.VALIDATIONS,
                error: APP.WRONG_EMAIL,
                arg: { name: opt.name },
            };
        } else {
            return true;
        }
    },
    password: (obj) => {
        let { data, opt } = obj;

        let reg = /^[0-9a-zA-Z]*$/;

        if (!data.match(reg)) {
            return {
                type: TYPE.VALIDATIONS,
                error: APP.WRONG_PASSWORD,
                arg: { name: opt.name },
            };
        } else {
            return true;
        }
    },
    agree: (obj) => {
        let { data, opt } = obj;

        if (!data) {
            return {
                type: TYPE.VALIDATIONS,
                error: APP.FAIL_AGREE,
                arg: { name: opt.name },
            };
        } else {
            return true;
        }
    },
    more: (obj) => {
        let { data, opt } = obj;
        if (data.length < opt.length) {
            return {
                type: TYPE.VALIDATIONS,
                error: APP.LENGTH_MORE,
                arg: { name: opt.name, length: opt.length },
            };
        } else {
            return true;
        }
    },
    less: (obj) => {
        let { data, opt } = obj;
        if (data.length > opt.length) {
            return {
                type: TYPE.VALIDATIONS,
                error: APP.LENGTH_LESS,
                arg: { name: opt.name, length: opt.length },
            };
        } else {
            return true;
        }
    },
    lessMB: (obj) => {
        let { data, opt } = obj;

        if (data > opt.length * 1000000) {
            return {
                type: TYPE.VALIDATIONS,
                error: APP.LENGTH_LESS_MB,
                arg: { name: opt.name, length: opt.length },
            };
        } else {
            return true;
        }
    },
};

function validate(obj, callback) {
    let array = createValidation(obj);
    if (array.length > 0) {
        throw { type: "VALIDATIONS", error: array };
    } else {
        callback();
    }
}

export { validateMultiple };
export default validate;
