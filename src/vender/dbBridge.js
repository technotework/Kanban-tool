import { db } from "@/vender/firebase";

const dbBridge = {
    getDb: () => {
        return db;
    }
};

export default dbBridge;
