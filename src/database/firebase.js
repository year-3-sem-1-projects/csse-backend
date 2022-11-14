// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCcfawM8f-4PGs0FdhvxkeMAQu2BLev2mw',
  authDomain: 'csse-da51b.firebaseapp.com',
  projectId: 'csse-da51b',
  storageBucket: 'csse-da51b.appspot.com',
  messagingSenderId: '80235561296',
  appId: '1:80235561296:web:9a4d7661ef4a8f43df2c55',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

export const signIn = async (email, password) => {
  try {
    const auth = getAuth()
    return (await signInWithEmailAndPassword(auth, email, password)).user
  } catch (error) {
    console.error(error.code, error.message)
  }
}

export const createUser = async (email, password) => {
  try {
    const auth = getAuth()
    return (await createUserWithEmailAndPassword(auth, email, password)).user
  } catch (error) {
    console.error(error.code, error.message)
  }
}

export const signOutUser = async () => {
  try {
    const auth = getAuth()
    return await signOut(auth)
  } catch (error) {
    console.error(error.code, error.message)
  }
}
