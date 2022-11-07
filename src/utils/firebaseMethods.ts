import { collection, getDocs, addDoc } from 'firebase/firestore'; 
import { db } from './firebase'; 
import { doc, getDoc, deleteDoc } from 'firebase/firestore'; 
import { NgModule } from '@angular/core'; 
 
@NgModule() 
export default class FirebaseMethods { 
  async getDocuments(collectionId: string) { 
    const querySnapshot = await getDocs(collection(db, collectionId)); 
    querySnapshot.forEach(doc => {
      console.log(doc.data());
    })
    return querySnapshot; 
  } 
 
  async getDocumentById(collectionId: string, documentId: string) { 
    const docRef = doc(db, collectionId, documentId); 
    const docSnap = await getDoc(docRef); 
    if (docSnap.exists()) { 
      return {
        id: docSnap.id,
        ...docSnap.data()
      }
    } else { 
      return null
    } 
  } 
 
  async create(collectionId: string, data: object) { 
    const docRef = await addDoc(collection(db, collectionId), data); 
    console.log('Document written with ID: ', docRef.id); 
  } 
 
  async removeDocument(collectionId: string, documentId: string) { 
    await deleteDoc(doc(db, collectionId, documentId)); 
  } 
}