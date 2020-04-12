export class MockedVuexStore {
    constructor({ state = {}, getters = {}, mutations = {}, actions = {} }) {
        this.state = state;

        this.getters = {};
        for (let getterName in getters) {
            this.getters[getterName] = getters[getterName](
                this.state,
                this.getters
            );
        }

        this.mutations = mutations;
        this.actions = actions;
    }

    commit(type, payload = null) {
        this.mutations[type](this.state, payload);
    }

    dispatch(type, payload = null) {
        return this.actions[type](
            {
                state: this.state,
                getters: this.getters,
                commit: (type, payload) => this.commit(type, payload),
                dispatch: (type, payload) => this.dispatch(type, payload)
            },
            payload
        );
    }
}
