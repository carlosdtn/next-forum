import firebase_app from "./config"
import { getFirestore, getDocs, collection } from "firebase/firestore"

const db = getFirestore(firebase_app)
const getAllDocuments = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName))

  const documents = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      data: doc.data(),
    }
  })

  return documents
}

export default getAllDocuments
