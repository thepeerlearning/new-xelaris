'use client';
import { ForgetPassword } from '@/components/layout/Auth/ForgetPassword';
import { Suspense } from 'react';

function ForgetPasswordContent() {
  return <ForgetPassword />;
}

export default function ForgetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ForgetPasswordContent />
    </Suspense>
  );
}