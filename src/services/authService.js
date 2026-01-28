// src/services/authService.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../utils/firebase';

class AuthService {
  // SIGNUP
  async signup({ email, password, fullName }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      const user = userCredential.user;

      // Update profile
      await updateProfile(user, {
        displayName: fullName,
      });

      // Send verification email
      await sendEmailVerification(user);

      // Return user data
      return {
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
        },
      };
    } catch (error) {
      throw this.handleFirebaseError(error);
    }
  }

  // SIGNIN
  async signin({ email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      const user = userCredential.user;

      // Return user data
      return {
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
        },
      };
    } catch (error) {
      throw this.handleFirebaseError(error);
    }
  }

  // SIGNOUT
  async signout() {
    try {
      // Firebase clears everything automatically
      await signOut(auth);
    } catch (error) {
      throw this.handleFirebaseError(error);
    }
  }

  // GET CURRENT USER
  // getCurrentUser() {
  //   return auth.currentUser;
  // }

  // GET ID TOKEN (for API calls)
  // async getIdToken() {
  //   const user = auth.currentUser;
  //   if (!user) return null;
    
  //   // Firebase auto-refreshes if expired!
  //   return await user.getIdToken();
  // }

  // AUTH STATE LISTENER
  onAuthStateChange(callback) {
    return onAuthStateChanged(auth, callback);
  }
  
  // ERROR HANDLER
  handleFirebaseError(error) {
    const errorMessages = {
      'auth/email-already-in-use': 'This email is already registered',
      'auth/invalid-email': 'Invalid email address',
      'auth/user-not-found': 'No account found with this email',
      'auth/wrong-password': 'Incorrect password',
      'auth/weak-password': 'Password should be at least 6 characters',
      'auth/too-many-requests': 'Too many attempts. Please try again later',
      'auth/network-request-failed': 'Network error. Please check your connection',
      'auth/user-disabled': 'This account has been disabled',
      'auth/invalid-credential': 'Invalid email or password',
    };

    return new Error(
      errorMessages[error.code] || error.message || 'Authentication failed'
    );
  }
}

export default new AuthService();