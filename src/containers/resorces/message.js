/**=================================
 * メッセージタイプの定数
 =================================*/
const DIALOGUE = "dialogue";
const ALERT = "alert";
const ERROR_MESSAGE = "errorMessage";

const UNEXPECTED = "予期せぬエラーが起きました。";
const NOT_EXIST = "データが存在しません。";
const EXIST = "すでにデータが存在します。";
const PERMISSION = "アクセス権がありません。";

const TYPE = {
    FIREBASE_FIRESTORE: "FIREBASE_FIRESTORE",
    FIREBASE_STORAGE: "FIREBASE_STORAGE",
    FIREBASE_AUTH: "FIREBASE_AUTH",
    VALIDATIONS: "VALIDATIONS",
    CONFIRM: "CONFIRM",
    ALERT: "ALERT",
    NETWORK: "NETWORK"
};

const APP = {
    DELETE: "app/delete",
    REQUIRE: "app/require",
    WRONG_TEXT: "app/text-violation",
    WRONG_EMAIL: "app/email-vaiolation",
    WRONG_PASSWORD: "app/password-vaiolation",
    FAIL_AGREE: "app/agreement-vaiolation",
    LENGTH_MORE: "app/form-length-more",
    LENGTH_LESS: "app/form-length-less",
    LENGTH_LESS_MB: "app/form-length-less-mb",
    LOGOUT: "app/force-logout",
    DISCONNECT: "app/internet-disconnect",
    SENDMAIL: "app/send-mail",
    NO_AUTH: "app/no-auth"
};
export { TYPE, APP };

/**=================================
 * EntryPoint
 * メッセージ生成
 * @param {*} error
 =================================*/
const getMessages = data => {
    let messages;
    switch (data.type) {
        case TYPE.FIREBASE_FIRESTORE:
            messages = fireStoreError(data.error);
            break;
        case TYPE.FIREBASE_STORAGE:
            messages = storageError(data.error);
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
};

/**=================================
 * Entry Point
 * ダイアログメッセージ生成
 * @param {*} data
================================= */
const getConfirmMessage = data => {
    let message = confirmMessage(data.normal, data.arg);
    return message;
};

export { getConfirmMessage, getMessages };

//====================================
//メッセージ生成関数
//====================================
/**
 * Firebase error メッセージ
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
 * Storage errorメッセージ
 * @param {*} error
 */
function storageError(error) {
    let message;
    switch (error) {
        case "storage/unknown":
        case "storage/object-not-found":
        case "storage/bucket-not-found":
        case "storage/project-not-found":
        case "storage/quota-exceeded":
        case "storage/invalid-checksum":
        case "storage/invalid-event-name":
        case "storage/invalid-url":
        case "storage/invalid-argument":
        case "storage/no-default-bucket":
        case "storage/cannot-slice-blob":
        case "storage/server-file-wrong-size":
            message = { text: UNEXPECTED, type: ERROR_MESSAGE };
            break;
        case "storage/canceled":
            message = {
                text: "ユーザーが操作をキャンセルしました。",
                type: ERROR_MESSAGE
            };
            break;
        case "storage/unauthenticated":
        case "storage/unauthorized":
            message = {
                text: "ユーザーに権限がありません。",
                type: ERROR_MESSAGE
            };
            break;
        case "storage/retry-limit-exceeded":
            message = {
                text: "処理時間制限を超えました。",
                type: ERROR_MESSAGE
            };
            break;
    }

    return [message];
}

/**
 * FirebaseAuth Errorメッセージ
 * @param {*} error
 */
function firebaseAuthError(error) {
    let message;
    switch (error) {
        case "auth/email-already-in-use":
            message = {
                text: "メールアドレスはすでに登録されています。",
                type: ERROR_MESSAGE
            };
            break;
        case "auth/invalid-email":
            message = {
                text: "メールアドレスが正しくありません。",
                type: ERROR_MESSAGE
            };
            break;
        case "auth/operation-not-allowed":
            message = {
                text: "メールアドレスまたはパスワードが有効ではありません。",
                type: ERROR_MESSAGE
            };
            break;
        case "auth/weak-password":
            message = {
                text: "パスワードが脆弱すぎます。",
                type: ERROR_MESSAGE
            };
            break;
        case "auth/user-disabled":
            message = { text: "無効なユーザーです。", type: ERROR_MESSAGE };
            break;
        case "auth/user-not-found":
            message = { text: "IDが間違っています。", type: ERROR_MESSAGE };
            break;
        case "auth/wrong-password":
            message = {
                text: "パスワードが間違っています。",
                type: ERROR_MESSAGE
            };
            break;
        default:
            message = { text: UNEXPECTED, type: ERROR_MESSAGE };
            break;
    }

    return [message];
}

/**
 * networkErrorメッセージ
 * @param {*} normal
 */
function networkError(error) {
    let message;
    switch (error) {
        case APP.DISCONNECT:
            message = {
                text: "インターネット接続をご確認ください。",
                type: ERROR_MESSAGE
            };
            break;
    }

    return [message];
}

/**
 * バリデーションエラーの配列からメッセージを生成
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
 * Validationメッセージを返す
 * @param {*} error
 */
function validationError(error, arg) {
    let message;
    switch (error) {
        case APP.REQUIRE:
            message = {
                text: `${arg.name}は入力必須です。`,
                type: ERROR_MESSAGE
            };
            break;
        case APP.WRONG_EMAIL:
            message = {
                text: "メールアドレスの形式が間違っています。",
                type: ERROR_MESSAGE
            };
            break;
        case APP.WRONG_PASSWORD:
            message = {
                text: "パスワードは半角英数字で入力してください。",
                type: ERROR_MESSAGE
            };
            break;
        case APP.FAIL_AGREE:
            message = {
                text: "利用規約をご覧いただき同意にチェックしてください。",
                type: ERROR_MESSAGE
            };
            break;
        case APP.LENGTH_MORE:
            message = {
                text: `${arg.name}は、${arg.length}文字以上で入力してください。`,
                type: ERROR_MESSAGE
            };
            break;
        case APP.LENGTH_LESS:
            message = {
                text: `${arg.name}は、${arg.length}文字以内で入力してください。`,
                type: ERROR_MESSAGE
            };
            break;
        case APP.LENGTH_LESS_MB:
            message = {
                text: `${arg.name}は、${arg.length}MB以内です。`,
                type: ERROR_MESSAGE
            };
            break;
        case APP.LOGOUT:
            message = {
                text: "予期せぬ問題が発生したためログアウトしました。",
                type: ERROR_MESSAGE
            };
            break;
        default:
            message = { text: UNEXPECTED, type: ERROR_MESSAGE };
            break;
    }

    return message;
}

//=====================================

/**
 * 確認ダイアログメッセージ生成
 * @param {*} normal
 */
function confirmMessage(normal, arg) {
    let message;
    switch (normal) {
        case APP.DELETE:
            message = {
                text: `「${arg.name}」を削除します。よろしいですか？`,
                type: DIALOGUE
            };
            break;
        case APP.SENDMAIL:
            message = {
                text:
                    "認証メールをご登録のメールアドレスに送信しました。\nご確認後、メール内のリンクをクリックすることで会員登録が完了します。",
                type: ALERT
            };
            break;
        case APP.NO_AUTH:
            message = {
                text:
                    "会員登録後お送りしたメールをご確認ください。メール内のリンクをクリックすることで会員登録が完了し、ログイン可能になります。",
                type: ALERT
            };
            break;
        case APP.AGREE:
            message = {
                text:
                    "デモご利用上のご注意\n\n「KANBAN」(以下本デモ)は技術デモを目的として公開されたサービスです。\nご利用上の注意点を記載いたしますので、同意していただいた上、ご利用ください。\n\n本デモは実際のサービスの保守・運用・機能の提供を目的としたものではありません。デモ用のログインID・パスワードを関係者以外に伝達することはお控えください。\n登録ユーザー情報および入力データは一定期間後削除されます。\n本デモに機密情報、個人情報を入力しないようにお願いします。\n無断転載を禁じます。",
                type: ALERT
            };
            break;
    }

    return [message];
}
