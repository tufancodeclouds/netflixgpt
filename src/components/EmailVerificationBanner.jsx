// src/components/EmailVerificationBanner.jsx
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { toast } from 'react-toastify';

const EmailVerificationBanner = () => {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  // Don't show banner if email is already verified
  if (!user || user.emailVerified) {
    return null;
  }

  const handleResendEmail = async () => {
    setLoading(true);
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        await sendEmailVerification(currentUser);
        toast.success('Verification email sent! Check your inbox', {
          position: 'top-right',
          autoClose: 4000,
        });
      }
    } catch (error) {
      toast.error('Failed to send email. Try again later', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="bg-orange-900 bg-opacity-40 border-l-4 border-orange-500 p-4 mb-6 rounded-md">
      <div className="flex items-start">
        <div className="shrink-0">
          <svg
            className="h-5 w-5 text-orange-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-2 flex-1">
          <h3 className="text-sm font-semibold text-orange-300">
            Email Verification Required
          </h3>
          <div className="mt-1 text-sm text-orange-200">
            <p>
              Please verify your email address to access all features. We've
              sent a verification link to <strong className="text-orange-100">{user.email}</strong>
            </p>
          </div>
          <div className="mt-1 flex gap-3">
            <button
              onClick={handleResendEmail}
              disabled={loading}
              className="text-sm font-medium text-orange-300 hover:text-orange-200 underline disabled:opacity-50 transition-colors cursor-pointer"
            >
              {loading ? 'Sending' : 'Resend verification email'}
            </button>
            <button
              onClick={handleRefresh}
              className="text-sm font-medium text-orange-300 hover:text-orange-200 underline transition-colors cursor-pointer"
            >
              I've verified, refresh page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationBanner;