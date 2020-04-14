import common from "@/store/common";
//--------------
//state
//--------------
const state = {};

//--------------
//mutations
//--------------
const mutations = {
    setMembersData(state, payload) {},
    setUnsnap(state, payload) {},
    remove(state) {}
};

//--------------
//getters
//--------------
const getters = {
    members(state) {
        return {
            "daf8a9a6-8c47-4a34-a6e7-705ef520f7f9": {
                img:
                    "https://firebasestorage.googleapis.com/v0/b/kanbandemo-d436e.appspot.com/o/daf8a9a6-8c47-4a34-a6e7-705ef520f7f9%2Ficon?alt=media&token=6d69cc1c-c5dc-4f4f-903a-1c6af390c300",
                nickname: "Cathy",
                altId: "daf8a9a6-8c47-4a34-a6e7-705ef520f7f9"
            },
            "96ceb7d3-bf2b-49d5-99b1-14a0849f85d7": {
                img:
                    "https://firebasestorage.googleapis.com/v0/b/kanbandemo-d436e.appspot.com/o/96ceb7d3-bf2b-49d5-99b1-14a0849f85d7%2Ficon?alt=media&token=292d0a08-4fb6-4d55-bc38-d9972e507719",
                nickname: "Ike",
                altId: "96ceb7d3-bf2b-49d5-99b1-14a0849f85d7"
            },
            "9aed5b31-e65b-4619-9f82-309352b3d210": {
                img:
                    "https://firebasestorage.googleapis.com/v0/b/kanbandemo-d436e.appspot.com/o/9aed5b31-e65b-4619-9f82-309352b3d210%2Ficon?alt=media&token=0fb1c599-53ad-4f70-b9bd-8e2b78c3cf5b",
                nickname: "Jenny"
            }
        };
    }
};

export { state, mutations, getters };
export default {
    namespaced: true,
    strict: true,
    state,
    mutations,
    getters
};
