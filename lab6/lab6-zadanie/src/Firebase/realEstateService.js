import { firestore } from "./init";
import { collection, addDoc, Timestamp, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

export const addNewRealEstate = async (user, content) => {
    try {
        await addDoc(collection(firestore, 'realEstates'), {
            uid: user.uid,
            content: content,
            completed: false,
            created: Timestamp.now()
        });
    } catch (err) {
        console.log(err);
    }
}

export const getRealEstates = async () => {
    const q = query(collection(firestore, "realEstates"));
    let realEstates = [];
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            realEstates.push(doc.data().content)
        });
    } catch (err) {
        console.log({ err });
    }

    return realEstates;
}

export const updateRealEstate = async (realEstateId, updatedContent) => {
    try {
        const realEstateRef = doc(firestore, "realEstates", realEstateId);
        await updateDoc(realEstateRef, { content: updatedContent });
        console.log("Ogłoszenie zostało zaktualizowane");
    } catch (err) {
        console.error(err);
    }
};