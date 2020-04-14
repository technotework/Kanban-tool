const fs = require("fs");
const firebase = require("@firebase/testing");
const projectId = "kanbandemoteam";

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
    await Promise.all(firebase.apps().map(app => app.delete()));
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
* teamIdの新規作成はできない
======================================= */
describe("teamIdの新規作成はできない", () => {
    /**
     * 前処理
     */
    beforeEach(async () => {
        const db = getFirestoreAdmin();
        //userDataMock
        const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
        await doc.set({
            contracts: { VlLhkwvK65svqmtJynUe: ["4ZO9rAlLJTQuB2Oz0YRq"] }
        });
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
            const doc = db
                .collection("/workspace/VlLhkwvK65svqmtJynUe/teams")
                .doc("4ZO9rAlLJTQuB2Oz0YRq");
            await firebase.assertFails(doc.set({ label: "MY TEAM" }));
        });

        test("認証あり:失敗", async () => {
            const db = getFirestoreWithAuth();
            const doc = db
                .collection("/workspace/VlLhkwvK65svqmtJynUe/teams")
                .doc("4ZO9rAlLJTQuB2Oz0YRq");
            await firebase.assertFails(doc.set({ label: "MY TEAM" }));
        });
    });
});

/**=======================================
* teamIdのupdate
======================================= */
describe("teamIdのupdate", () => {
    /**
     * 前処理
     */
    beforeEach(async () => {
        // セキュリティルールの読み込み
        const db = getFirestoreAdmin();
        //userDataMock
        const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
        await doc.set({
            contracts: { VlLhkwvK65svqmtJynUe: ["4ZO9rAlLJTQuB2Oz0YRq"] }
        });
        //teamMock
        const teamDoc = db
            .collection("/workspace/VlLhkwvK65svqmtJynUe/teams")
            .doc("4ZO9rAlLJTQuB2Oz0YRq");
        await teamDoc.set({ label: "MY TEAM" });
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
            const doc = db.doc("/workspace/VlLhkwvK65svqmtJynUe/teams/4ZO9rAlLJTQuB2Oz0YRq");
            await firebase.assertFails(doc.update({ label: "MY TEAM2" }));
        });
        test("認証あり:成功", async () => {
            const db = getFirestoreWithAuth();
            const doc = db
                .collection("/workspace/VlLhkwvK65svqmtJynUe/teams")
                .doc("4ZO9rAlLJTQuB2Oz0YRq");

            firebase.assertSucceeds(await doc.update({ label: "MY TEAM2" }));
        });
    });
});

/**=======================================
* teamIdのget
======================================= */
describe("teamIdのget", () => {
    /**
     * 前処理
     */
    beforeEach(async () => {
        const db = getFirestoreAdmin();
        //userDataMock
        const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
        await doc.set({
            contracts: { VlLhkwvK65svqmtJynUe: ["4ZO9rAlLJTQuB2Oz0YRq"] }
        });
        //teamMock
        const teamDoc = db
            .collection("/workspace/VlLhkwvK65svqmtJynUe/teams")
            .doc("4ZO9rAlLJTQuB2Oz0YRq");
        await teamDoc.set({ label: "MY TEAM" });
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
            const doc = db
                .collection("/workspace/VlLhkwvK65svqmtJynUe/teams")
                .doc("4ZO9rAlLJTQuB2Oz0YRq");
            await firebase.assertFails(doc.get());
        });

        test("認証あり:失敗", async () => {
            const db = getFirestoreWithAuth();
            const doc = db
                .collection("/workspace/VlLhkwvK65svqmtJynUe/teams")
                .doc("4ZO9rAlLJTQuB2Oz0YRq");
            await firebase.assertSucceeds(doc.get());
        });
    });
});

/**=======================================
* teamIdのdeleteはできない
======================================= */
describe("teamIdのdelete", () => {
    /**
     * 前処理
     */
    beforeEach(async () => {
        const db = getFirestoreAdmin();
        //userDataMock
        const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
        await doc.set({
            contracts: { VlLhkwvK65svqmtJynUe: ["4ZO9rAlLJTQuB2Oz0YRq"] }
        });
        //teamMock
        const teamDoc = db
            .collection("/workspace/VlLhkwvK65svqmtJynUe/teams")
            .doc("4ZO9rAlLJTQuB2Oz0YRq");
        await teamDoc.set({ label: "MY TEAM" });
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
            const doc = db
                .collection("/workspace/VlLhkwvK65svqmtJynUe/teams")
                .doc("4ZO9rAlLJTQuB2Oz0YRq");
            await firebase.assertFails(doc.delete());
        });

        test("認証あり:失敗", async () => {
            const db = getFirestoreWithAuth();
            const doc = db
                .collection("/workspace/VlLhkwvK65svqmtJynUe/teams")
                .doc("4ZO9rAlLJTQuB2Oz0YRq");
            await firebase.assertFails(doc.delete());
        });
    });
});
