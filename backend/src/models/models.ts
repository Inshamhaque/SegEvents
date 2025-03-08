import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
async function addEvent() {
  try {
    const docRef = await addDoc(collection(db, "events"), {
      name: "demo-1",
      description: "it is demo event",
      participants: 0,
    });
    console.log("collection created successfully", docRef.id);
  } catch (e) {
    console.error("error occurred", e);
  }
}
addEvent();
