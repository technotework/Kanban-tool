/**
 * FirebaseTesting に仮データを入れる
 * 2プロジェクト 中に2ボード 中に２タスク
 */
export default async function setInitialFBData(db) {
    await db()
        .doc("users/cTJUncptCPOMCJj9NHWq9ubIgMW2")
        .set({
            altId: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
            contracts: {
                contractId: ["teamId"]
            },
            img: true,
            nickname: "Lucas"
        });
    await db()
        .doc("workspace/contractId/teams/teamId/")
        .set({
            label: "MY TEAM"
        });

    //project id1
    await db()
        .doc("workspace/contractId/teams/teamId/projects/projectId1/")
        .set({
            project: {
                id: "",
                label: "Project1",
                update_date: 1586815182,
                order: 10000000
            }
        });

    await db()
        .doc("workspace/contractId/teams/teamId/projects/projectId1/boards/boardId1/")
        .set({
            board: {
                id: "",
                order: 10000000,
                label: "NewBoard1"
            }
        });

    await db()
        .doc("workspace/contractId/teams/teamId/projects/projectId1/boards/boardId2/")
        .set({
            board: {
                id: "",
                order: 20000000,
                label: "NewBoard2"
            }
        });

    await db()
        .doc(
            "workspace/contractId/teams/teamId/projects/projectId1/boards/boardId1/tasks/taskId1_1"
        )
        .set({
            task: {
                id: "",
                data: "content1",
                order: 10000000,
                labels: [],
                members: [],
                editing: "",
                editing_date: null,
                createUser: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
                create_date: 1586815182,
                start_date: null,
                end_date: null,
                archive_date: null,
                comments: []
            }
        });

    await db()
        .doc(
            "workspace/contractId/teams/teamId/projects/projectId1/boards/boardId1/tasks/taskId1_2"
        )
        .set({
            task: {
                id: "",
                data: "content2",
                order: 20000000,
                labels: [],
                members: [],
                editing: "",
                editing_date: null,
                createUser: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
                create_date: 1586815182,
                start_date: null,
                end_date: null,
                archive_date: null,
                comments: []
            }
        });

    await db()
        .doc(
            "workspace/contractId/teams/teamId/projects/projectId1/boards/boardId2/tasks/taskId2_1"
        )
        .set({
            task: {
                id: "",
                data: "content1",
                order: 10000000,
                labels: [],
                members: [],
                editing: "",
                editing_date: null,
                createUser: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
                create_date: 1586815182,
                start_date: null,
                end_date: null,
                archive_date: null,
                comments: []
            }
        });

    await db()
        .doc(
            "workspace/contractId/teams/teamId/projects/projectId1/boards/boardId2/tasks/taskId2_2"
        )
        .set({
            task: {
                id: "",
                data: "content2",
                order: 20000000,
                labels: [],
                members: [],
                editing: "",
                editing_date: null,
                createUser: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
                create_date: 1586815182,
                start_date: null,
                end_date: null,
                archive_date: null,
                comments: []
            }
        });

    //project id2
    await db()
        .doc("workspace/contractId/teams/teamId/projects/projectId2/")
        .set({
            project: {
                id: "",
                label: "Project2",
                update_date: 1586815182,
                order: 20000000
            }
        });

    await db()
        .doc("workspace/contractId/teams/teamId/projects/projectId2/boards/boardId1/")
        .set({
            board: {
                id: "",
                order: 10000000,
                label: "NewBoard1"
            }
        });

    await db()
        .doc("workspace/contractId/teams/teamId/projects/projectId2/boards/boardId2/")
        .set({
            board: {
                id: "",
                order: 20000000,
                label: "NewBoard2"
            }
        });

    await db()
        .doc(
            "workspace/contractId/teams/teamId/projects/projectId2/boards/boardId1/tasks/taskId1_1"
        )
        .set({
            task: {
                id: "",
                data: "content1",
                order: 10000000,
                labels: [],
                members: [],
                editing: "",
                editing_date: null,
                createUser: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
                create_date: 1586815182,
                start_date: null,
                end_date: null,
                archive_date: null,
                comments: []
            }
        });

    await db()
        .doc(
            "workspace/contractId/teams/teamId/projects/projectId2/boards/boardId1/tasks/taskId1_2"
        )
        .set({
            task: {
                id: "",
                data: "content2",
                order: 20000000,
                labels: [],
                members: [],
                editing: "",
                editing_date: null,
                createUser: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
                create_date: 1586815182,
                start_date: null,
                end_date: null,
                archive_date: null,
                comments: []
            }
        });

    await db()
        .doc(
            "workspace/contractId/teams/teamId/projects/projectId2/boards/boardId2/tasks/taskId2_1"
        )
        .set({
            task: {
                id: "",
                data: "content1",
                order: 10000000,
                labels: [],
                members: [],
                editing: "",
                editing_date: null,
                createUser: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
                create_date: 1586815182,
                start_date: null,
                end_date: null,
                archive_date: null,
                comments: []
            }
        });

    await db()
        .doc(
            "workspace/contractId/teams/teamId/projects/projectId2/boards/boardId2/tasks/taskId2_2"
        )
        .set({
            task: {
                id: "",
                data: "content2",
                order: 20000000,
                labels: [],
                members: [],
                editing: "",
                editing_date: null,
                createUser: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
                create_date: 1586815182,
                start_date: null,
                end_date: null,
                archive_date: null,
                comments: []
            }
        });

    return true;
}
