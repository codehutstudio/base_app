import { initializeApp } from 'firebase/app'
import { doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
import { handleError, handleSuccess } from '../Utils/api.functions';

const firebaseConfig = {
    apiKey: "AIzaSyCWNJAFc26kVELpzIafjZXznUHl3i3aXto",
    authDomain: "newspaper-delivery-336622.firebaseapp.com",
    projectId: "newspaper-delivery-336622",
    storageBucket: "newspaper-delivery-336622.appspot.com",
    messagingSenderId: "842792863999",
    appId: "1:842792863999:web:473668ca25b756179e24ca",
    measurementId: "G-TS2PPPH9QV"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore()


export interface DocumentProps {
    collectionName: string;
    documentName: string;
}
export interface SaveDocumentProps extends DocumentProps {
    data: {[key:string]: any};
}
export const getDocument = async ({ collectionName, documentName }: DocumentProps) => {
    try {
        const docRef = await getDoc(doc(db, collectionName, documentName))
        if (docRef.exists()) {
            return handleSuccess(docRef.data())
        } else {
            throw Error("Document does not exist")
        }
    } catch (error) {
        handleError(error)
    }
}
export const saveDocument = async ({ collectionName, documentName, data }: SaveDocumentProps) => {
    try {
        const result = await setDoc(doc(db, collectionName, documentName), data)
        return handleSuccess(result)
    } catch (error) {
        handleError(error)
    }
}
export const updateDocument = async ({ collectionName, documentName, data }: SaveDocumentProps) => {
    try {
        const docRef = doc(db, collectionName, documentName)
        const result = await updateDoc(docRef, data)
        return handleSuccess(result)
    } catch (error) {
        handleError(error)
    }
}