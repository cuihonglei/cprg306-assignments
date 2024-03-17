"use client";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {

  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      // Handle sign-in error
      console.error("Error signing in with GitHub:", error);
    }
  };

  // Sign out of Firebase
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      // Handle sign-out error
      console.error("Error signing out:", error);
    }
  };

  // Display user information
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email}).</p>

          {/* Button to trigger sign-out */}
          <button onClick={handleSignOut}>Sign out</button>

          {/* link to the shopping list page */}
          <p><Link href="/week-8/shopping-list" className="hover:underline">Continue to your Shopping List</Link></p>
        </div>
      ) : (
        <div>
          {/* Button to trigger GitHub sign-in */}
          <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
        </div>
      )}
    </div>
  );
};