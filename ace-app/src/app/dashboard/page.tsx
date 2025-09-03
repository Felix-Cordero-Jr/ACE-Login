import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId) {
    return <p className="text-center mt-10">You are not logged in.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome, {user?.firstName} 👋</h1>
      <p className="text-gray-600 mt-2">This is your secure dashboard.</p>
    </div>
  );
}
