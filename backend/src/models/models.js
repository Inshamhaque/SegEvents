"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("../firebase");
const firestore_1 = require("firebase/firestore");
function addEvent() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const docRef = yield (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_1.db, "events"), {
                name: "demo-1",
                description: "it is demo event",
                participants: 0,
            });
            console.log("collection created successfully", docRef.id);
        }
        catch (e) {
            console.error("error occurred", e);
        }
    });
}
addEvent();
