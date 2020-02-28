

const DIALOGUE = "dialogue";
const ERROR_MESSAGE = "errorMessage";

const UNEXPECTED = "予期せぬエラーが起きました。"
const NOT_EXIST = "データが存在しません。"
const EXIST = "すでにデータが存在します。"
const PERMISSION = "アクセス権がありません。"

const TYPE = {

  FIREBASE_FIRESTORE: "FIREBASE_FIRESTORE",
  FIREBASE_AUTH: "FIREBASE_AUTH",
  VALIDATIONS: "VALIDATIONS",
  VALIDATION: "VALIDATION",
  CONFIRM: "CONFIRM",
  NETWORK: "NETWORK"

}

const APP = {
  DELETE: "app/delete",
  REQUIRE: "app/require",
  WRONG_TEXT: "app/text-violation",
  WRONG_EMAIL: "app/email-vaiolation",
  WRONG_PASSWORD: "app/password-vaiolation",
  FAIL_AGREE: "app/agreement-vaiolation",
  LENGTH_MORE: "app/form-length-more",
  LENGTH_LESS: "app/form-length-less",
  LOGOUT: "app/force-logout",
  DISCONNECT: "app/internet-disconnect",
}
export { TYPE, APP };

/**
 * メッセージ生成
 * @param {*} error 
 */
const getMessages = (data) => {

  let messages;
  switch (data.type) {
    case TYPE.FIREBASE_FIRESTORE:
      messages = fireStoreError(data.error);
      break;
    case TYPE.FIREBASE_AUTH:
      messages = firebaseAuthError(data.error);
      break;
    case TYPE.VALIDATIONS:
      messages = createValidationError(data.error);
      break;
    case TYPE.NETWORK:
      messages = networkError(data.error);
      break;
    default:
      messages = [{ text: UNEXPECTED, type: ERROR_MESSAGE }];
      break;
  }

  return messages;
}

/**
 * ダイアログメッセージ生成
 * @param {*} data 
 */
const getConfirmMessage = (data) => {

  let message = confirmMessage(data.normal, data.arg);
  return message;
}

export { getMessages, getConfirmMessage };

/**
 * firebase error
 * @param {*} error 
 */
function fireStoreError(error) {

  let message;
  switch (error) {
    case "cancelled":
    case "unknown":
    case "invalid-argument":
    case "deadline-exceeded":
    case "resource-exhausted":
    case "failed-precondition":
    case "aborted":
    case "out-of-range":
    case "internal":
    case "unavailable":
    case "data-loss":
      message = { text: UNEXPECTED, type: ERROR_MESSAGE };
      break;
    case "not-found":
      message = { text: NOT_EXIST, type: ERROR_MESSAGE };
      break;
    case "already-exists":
      message = { text: EXIST, type: ERROR_MESSAGE };
      break;
    case "permission-denied":
    case "unauthenticated":
      message = { text: PERMISSION, type: ERROR_MESSAGE };
      break;
    default:
      message = { text: UNEXPECTED, type: ERROR_MESSAGE };
      break;
  }

  return [message];
}

/**
 * FirebaseAuth Error
 * @param {*} error 
 */
function firebaseAuthError(error) {

  let message;
  switch (error) {
    case "auth/email-already-in-use":
      message = { text: "メールアドレスはすでに登録されています。", type: ERROR_MESSAGE };
      break;
    case "auth/invalid-email":
      message = { text: "メールアドレスが正しくありません。", type: ERROR_MESSAGE };
      break;
    case "auth/operation-not-allowed":
      message = { text: "メールアドレスまたはパスワードが有効ではありません。", type: ERROR_MESSAGE };
      break;
    case "auth/weak-password":
      message = { text: "パスワードが脆弱すぎます。", type: ERROR_MESSAGE };
      break;
    case "auth/user-disabled":
      message = { text: "無効なユーザーです。", type: ERROR_MESSAGE };
      break;
    case "auth/user-not-found":
      message = { text: "IDが間違っています。", type: ERROR_MESSAGE };
      break;
    case "auth/wrong-password":
      message = { text: "パスワードが間違っています。", type: ERROR_MESSAGE };
      break;
    default:
      message = { text: UNEXPECTED, type: ERROR_MESSAGE };
      break;
  }

  return [message];
}

/**
 * バリデーションエラーの配列生成
 * @param {*} obj 
 */
function createValidationError(array) {

  let result = [];
  for (let i = 0; i < array.length; i++) {
    let data = array[i];
    let error = validationError(data.error, data.arg);
    result.push(error);
  }
  return result;
}


/**
 * Validation
 * @param {*} error 
 */
function validationError(error, arg) {

  let message;
  switch (error) {
    case APP.REQUIRE:
      message = { text: `${arg.name}は入力必須です。`, type: ERROR_MESSAGE };
      break;
    case APP.WRONG_EMAIL:
      message = { text: "メールアドレスの形式が間違っています。", type: ERROR_MESSAGE };
      break;
    case APP.WRONG_PASSWORD:
      message = { text: "パスワードは半角英数字で入力してください。", type: ERROR_MESSAGE };
      break;
    case APP.FAIL_AGREE:
      message = { text: "利用規約をご覧いただき同意にチェックしてください。", type: ERROR_MESSAGE };
      break;
    case APP.LENGTH_MORE:
      message = { text: `${arg.name}は、${arg.length}文字以上で入力してください。`, type: ERROR_MESSAGE };
      break;
    case APP.LENGTH_LESS:
      message = { text: `${arg.name}は、${arg.length}文字以内で入力してください。`, type: ERROR_MESSAGE };
      break;
    case APP.LOGOUT:
      message = { text: "予期せぬ問題が発生したためログアウトしました。", type: ERROR_MESSAGE };
      break;
    default:
      message = { text: UNEXPECTED, type: ERROR_MESSAGE };
      break;
  }

  return message;
}

/**
 * 確認ダイアログ
 * @param {*} normal 
 */
function confirmMessage(normal, arg) {

  let message;
  switch (normal) {
    case APP.DELETE:
      message = { text: `「${arg.name}」を削除します。よろしいですか？`, type: DIALOGUE };
      break;
  }

  return [message];
}


/**
 * networkError
 * @param {*} normal 
 */
function networkError(error) {

  let message;
  switch (error) {
    case APP.DISCONNECT:
      message = { text: "インターネット接続をご確認ください。", type: ERROR_MESSAGE };
      break;
  }

  return [message];
}

