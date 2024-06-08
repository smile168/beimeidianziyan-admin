import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

// matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
