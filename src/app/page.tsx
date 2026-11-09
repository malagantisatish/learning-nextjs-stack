
import { redirect } from 'next/navigation';
import { Suspense } from 'react'
import { auth } from './authentication/github/auth';
import { connection } from 'next/server';
import Link from 'next/link';



async function AuthenticatedPage() {
  await connection();

  const session = await auth();

  if (!session) {
    redirect('/authentication/userCredentials/login');
  }

  return (
    <div className="flex flex-col justify-center items-center bg-blue-600 text-white">
      <h1>Welcome to Next.js</h1>
    </div>
  );
}


const page = () => {

  return (
    <Suspense fallback={<div>loading</div>}>
      <AuthenticatedPage />
      {/* <div className='flex flex-col justify-center items-center bg-blue-600 text-white'>
        <h1>welcome to next js 14</h1> */}
      {/* <button onClick={userHandler} className='border bg-green-500 px-4 py-2 rounded-md'>login</button> */}
      {/* </div> */}
      <Link href="/api/auth/signout">Logout</Link>
    </Suspense>
  )
}

export default page