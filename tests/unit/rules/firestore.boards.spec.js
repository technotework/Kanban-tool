const fs = require("fs");
const firebase = require("@firebase/testing");
const projectId = "kanbandemoboards";
const boardsPath =
    "workspace/VlLhkwvK65svqmtJynUe/teams/4ZO9rAlLJTQuB2Oz0YRq/projects/abcd/boards/efgh";
const initialData = { board: { label: "doing" } };
const subData = { board: { label: "ToDo" } };

/**=========================================
 * 初期設定
 =========================================*/
//実行前に一度だけ実行
beforeAll(async () => {
    await firebase.loadFirestoreRules({
        projectId: projectId,
        rules: fs.readFileSync("./firestore.rules", "utf8")
    });
});
afterAll(async () => {
    await Promise.all(
        firebase.apps().map(app => app.delete()) //生成したアプリを削除
    );
});
/**=========================================
 * DB
 =========================================*/
/**
 * Admin
 */
function getFirestoreAdmin() {
    const app = firebase.initializeAdminApp({
        projectId: projectId
    });

    return app.firestore();
}

/**
 * 認証なし
 */
function getFirestore() {
    const app = firebase.initializeTestApp({
        projectId: projectId
    });

    return app.firestore();
}

/**
 * 認証あり
 */
function getFirestoreWithAuth() {
    const app = firebase.initializeTestApp({
        projectId: projectId,
        auth: {
            uid: "cTJUncptCPOMCJj9NHWq9ubIgMW2",
            email: "demo1@technote.work"
        }
    });

    return app.firestore();
}

/**
 * 他の人の認証
 */
function getFirestoreWithOtherAuth() {
    const app = firebase.initializeTestApp({
        projectId: projectId,
        auth: {
            uid: "YInH5JR3z4dM2kkof2Ipt6mpXf42",
            email: "demo2@technote.work"
        }
    });

    return app.firestore();
}

/**=======================================
* boards set
======================================= */
describe("boards set", () => {
    /**
     * 前処理
     */
    beforeEach(async () => {
        const db = getFirestoreAdmin();
        await setupUser(db);
    });
    /**
     * 後処理
     */
    afterEach(async () => {
        // 使用したアプリの削除
        await firebase.clearFirestoreData({
            projectId: projectId
        });
    });

    /**==================
     * Set
     ==================*/
    describe("Set", () => {
        //SET
        test("認証なし:失敗", async () => {
            const db = getFirestore();
            const doc = db.doc(boardsPath);
            await firebase.assertFails(doc.set(initialData));
        });

        test("認証あり:成功", async () => {
            const db = getFirestoreWithAuth();
            const doc = db.doc(boardsPath);
            await firebase.assertSucceeds(doc.set(initialData));
        });
    });
});

/**=======================================
* boardsのupdate
======================================= */
describe("boardsのupdate", () => {
    /**
     * 前処理
     */
    beforeEach(async () => {
        // セキュリティルールの読み込み
        const db = getFirestoreAdmin();

        //Mock
        await setupUser(db);
        await setBoardsDoc(db);
    });
    /**
     * 後処理
     */
    afterEach(async () => {
        // 使用したアプリの削除
        await firebase.clearFirestoreData({
            projectId: projectId
        });
    });

    /**==================
     * Update
     ==================*/
    describe("Update", () => {
        test("認証なし:失敗", async () => {
            const db = getFirestore();
            const doc = db.doc(boardsPath);
            await firebase.assertFails(doc.update(subData));
        });

        test("認証あり:成功", async () => {
            const db = getFirestoreWithAuth();
            const doc = db.doc(boardsPath);
            await firebase.assertSucceeds(doc.update(subData));
        });
    });
});

/**=======================================
* teamIdのget
======================================= */
describe("boardssのget", () => {
    /**
     * 前処理
     */
    beforeEach(async () => {
        const db = getFirestoreAdmin();
        //Mock
        await setupUser(db);
        await setBoardsDoc(db);
    });
    /**
     * 後処理
     */
    afterEach(async () => {
        // 使用したアプリの削除
        await firebase.clearFirestoreData({
            projectId: projectId
        });
    });

    /**==================
     * Update
     ==================*/
    describe("Get", () => {
        //contractIdとteamIdをusersの自分のdocにもっているため認証のみで通る
        //SET
        test("認証なし:失敗", async () => {
            const db = getFirestore();
            const doc = db.doc(boardsPath);
            await firebase.assertFails(doc.get());
        });

        test("認証あり:成功", async () => {
            const db = getFirestoreWithAuth();
            const doc = db.doc(boardsPath);
            await firebase.assertSucceeds(doc.get());
        });
    });
});

/**=======================================
* teamIdのdeleteはできない
======================================= */
describe("boardssのdelete", () => {
    /**
     * 前処理
     */
    beforeEach(async () => {
        const db = getFirestoreAdmin();
        //Mock
        await setupUser(db);
        await setBoardsDoc(db);
    });
    /**
     * 後処理
     */
    afterEach(async () => {
        // 使用したアプリの削除
        await firebase.clearFirestoreData({
            projectId: projectId
        });
    });

    /**==================
     * Delete
     ==================*/
    describe("Delete", () => {
        //contractIdとteamIdをusersの自分のdocにもっているため認証のみで通る
        //SET
        test("認証なし:失敗", async () => {
            const db = getFirestore();
            const doc = db.doc(boardsPath);
            await firebase.assertFails(doc.delete());
        });

        test("認証あり:成功", async () => {
            const db = getFirestoreWithAuth();
            const doc = db.doc(boardsPath);
            await firebase.assertSucceeds(doc.delete());
        });
    });
});

/**
 * userのmock
 * @param {*} db
 */
async function setupUser(db) {
    const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
    await doc.set({
        contracts: { VlLhkwvK65svqmtJynUe: ["4ZO9rAlLJTQuB2Oz0YRq"] }
    });
}

/**
 * boardのmock
 * @param {*} db
 */
async function setBoardsDoc(db) {
    const boardsDoc = db.doc(boardsPath);
    await boardsDoc.set(initialData);
}
