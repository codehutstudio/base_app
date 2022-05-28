import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, DocumentProps } from "../Libs/firebase.lib";
import { useApi } from "./useApi.hook";

export const useDocument = (props: DocumentProps) => {
    const apiManager = useApi()

    useEffect(() => {
        apiManager.setLoading(true)
        const unsubscribe = onSnapshot(doc(db, props.collectionName, props.documentName), doc => {
            if (doc.exists()) {
                const docData = doc.data()
                apiManager.setData(docData as any)
            } else {
                apiManager.setError({ message: 'No Data' } as any)
            }
            apiManager.setLoading(false)
        })

        return () => unsubscribe()
    })

    return { loading: apiManager.loading, error: apiManager.error, data: apiManager.data }
}

export const useCollection = ({collectionName}: {collectionName: string}) => {
    const apiManager = useApi()
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, collectionName), collectionSnapshot => {
            debugger
        })
        return () => unsubscribe()
    }, [collectionName])

}

