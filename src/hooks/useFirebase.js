import initializeFirebase from "../Pages/Login/initializeFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeFirebase();

const useFirebase = () => {
  const [authError, setAuthError] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [admin , setAdmin] = useState(false)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const registerUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = { email: email, displayName: name };
        setUser(newUser);
        savedUserToDb(name, email, 'POST')
        console.log(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setAuthError(error.message);
          });
        setAuthError("");
        history.push('/')
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };
  const googleSignIn = (location, history) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        savedUserToDb(user.displayName, user.email, 'PUT')
        const destination = location.state.from || "/";
        history.push(destination);
        console.log(user);
        setAuthError("");
      })
      .catch((error) => {
        // setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location.state.from || "/";
        history.push(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const savedUserToDb= (name, email, method)=>{
    const dbUser={name:name, email:email}
    fetch('http://localhost:5000/users',{
      method:method,
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(dbUser)
    })
    .then(res=> res.json())
    .then(data=> {

    })
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
        setLoading(false);
      }
    });
    return () => unsubscribe;
  }, []);

  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res=> res.json())
    .then(data =>setAdmin(data.admin))
  },[user.email])

  return {
    user,
    admin,
    registerUser,
    logOut,
    loginUser,
    loading,
    authError,
    googleSignIn,
  };
};

export default useFirebase;
