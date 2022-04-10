import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA93KN60OV94s_jaTwNjLeB6Yfh-XrZ7Ws",
    authDomain: "trend-clothing-db-dab06.firebaseapp.com",
    projectId: "trend-clothing-db-dab06",
    storageBucket: "trend-clothing-db-dab06.appspot.com",
    messagingSenderId: "56208669",
    appId: "1:56208669:web:6a1b82872838f5507285f4",
    measurementId: "G-L99DX9BH4H"
};

export const createUserProfileDocument = async (userAuth, otherData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })

        } catch (error) {
            console.log('Error when creating user', error.message)
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    console.log(collectionRef)

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(obj.tite)
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collection) => {
    const transformedCollection = collection.docs.map(doc => {
        const { title, items } = doc.data();
        
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((accumulator, collections) => {
        accumulator[collections.title.toLowerCase()] = collections;
        return accumulator
    }, {});
} ;

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
