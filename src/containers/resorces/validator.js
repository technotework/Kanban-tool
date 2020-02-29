import { TYPE, APP } from "@/containers/resorces/message"
let unit = 10000000;


const validator = {

  require: (obj) => {

    let { data, opt } = obj;

    if (data == "") {

      return { type: TYPE.VALIDATION, error: APP.REQUIRE, arg: { name: opt.name } }

    } else {
      return true;
    }

  },
  email: (obj) => {

    let { data, opt } = obj;

    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (data != "" && !data.match(reg)) {

      return { type: TYPE.VALIDATION, error: APP.WRONG_EMAIL, arg: { name: opt.name } }

    } else {
      return true;
    }

  },
  password: (obj) => {

    let { data, opt } = obj;

    let reg = /^[0-9a-zA-Z]*$/;

    if (!data.match(reg)) {

      return { type: TYPE.VALIDATION, error: APP.WRONG_PASSWORD, arg: { name: opt.name } }

    } else {
      return true;
    }

  },
  agree: (obj) => {

    let { data, opt } = obj;

    if (!data) {

      return { type: TYPE.VALIDATION, error: APP.FAIL_AGREE, arg: { name: opt.name } }

    } else {
      return true;
    }

  },
  more: (obj) => {

    let { data, opt } = obj;
    if (data.length < opt.length) {

      return { type: TYPE.VALIDATION, error: APP.LENGTH_MORE, arg: { name: opt.name, length: opt.length } }

    } else {
      return true;
    }
  },
  less: (obj) => {

    let { data, opt } = obj;
    if (data.length > opt.length) {

      return { type: TYPE.VALIDATION, error: APP.LENGTH_LESS, arg: { name: opt.name, length: opt.length } }

    } else {
      return true;
    }
  }
};

function createValidation(obj) {

  let { data, name, more, less, require, email, password, agree } = obj;

  let target = {};

  if (more != undefined) {

    target["more"] = { data: data, opt: { name: name, length: more } };
  }

  if (less != undefined) {

    target["less"] = { data: data, opt: { name: name, length: less } };
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

function validate(obj, callback) {

  let array = createValidation(obj);
  if (array.length > 0) {

    throw { type: "VALIDATIONS", error: array }
  }
  else {
    callback();
  }

}

function validateMultiple(objects, callback) {

  let array = [];
  for (let i = 0; i < objects.length; i++) {
    let result = createValidation(objects[i]);

    for (let j = 0; j < result.length; j++) {
      array.push(result[j]);
    }
  }

  if (array.length > 0) {

    throw { type: "VALIDATIONS", error: array }
  }
  else {
    callback();
  }

}

export { validateMultiple }
export default validate;