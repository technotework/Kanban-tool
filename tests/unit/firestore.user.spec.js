const fs = require("fs");
const firebase = require("@firebase/testing");
const projectId = "kanbandemouser";

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
 * users 新規作成
======================================= */
describe("users set", () => {
    beforeEach(async () => {});

    afterEach(async () => {
        // 使用したアプリの削除
        await firebase.clearFirestoreData({
            projectId: projectId
        });
    });

    describe("SET", () => {
        //SET
        test("認証なし:失敗", async () => {
            const db = getFirestore();
            const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
            await firebase.assertFails(doc.set({ nickname: "john" }));
        });

        test("認証あり:成功", async () => {
            const db = getFirestoreWithAuth();
            const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
            await firebase.assertSucceeds(doc.set({ nickname: "john" }));
        });
    });
});

/**=======================================
 * users update
======================================= */
describe("users update", () => {
    beforeEach(async () => {
        const db = getFirestoreAdmin();
        //userDataMock
        const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
        await doc.set({ nickname: "Tom" });
    });

    afterEach(async () => {
        // 使用したアプリの削除
        await firebase.clearFirestoreData({
            projectId: projectId
        });
    });

    describe("UPDATE", () => {
        //SET
        test("認証なし:失敗", async () => {
            const db = getFirestore();
            const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
            await firebase.assertFails(doc.update({ nickname: "john" }));
        });

        test("認証あり:成功", async () => {
            const db = getFirestoreWithAuth();
            const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
            await firebase.assertSucceeds(doc.update({ nickname: "john" }));
        });

        test("別ユーザー認証あり:成功", async () => {
            const db = getFirestoreWithOtherAuth();
            const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
            await firebase.assertFails(doc.update({ nickname: "john" }));
        });
    });
});

/**=======================================
 * users get
======================================= */
describe("users get", () => {
    beforeEach(async () => {
        const db = getFirestoreAdmin();
        //userDataMock
        const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
        await doc.set({ nickname: "Tom" });
    });

    afterEach(async () => {
        // 使用したアプリの削除
        await firebase.clearFirestoreData({
            projectId: projectId
        });
    });

    describe("GET", () => {
        //SET
        test("認証なし:失敗", async () => {
            const db = getFirestore();
            const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
            await firebase.assertFails(doc.get());
        });

        test("認証あり:成功", async () => {
            const db = getFirestoreWithAuth();
            const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
            await firebase.assertSucceeds(doc.get());
        });
    });
});

/**=======================================
 * users delete
======================================= */
describe("users delete", () => {
    beforeEach(async () => {
        const db = getFirestoreAdmin();
        //userDataMock
        const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
        await doc.set({ nickname: "Tom" });
    });

    afterEach(async () => {
        // 使用したアプリの削除
        await firebase.clearFirestoreData({
            projectId: projectId
        });
    });

    describe("DELETE", () => {
        //SET
        test("認証なし:失敗", async () => {
            const db = getFirestore();
            const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
            await firebase.assertFails(doc.delete());
        });

        test("認証あり:成功", async () => {
            const db = getFirestoreWithAuth();
            const doc = db.collection("users").doc("cTJUncptCPOMCJj9NHWq9ubIgMW2");
            await firebase.assertFails(doc.delete());
        });
    });
});
