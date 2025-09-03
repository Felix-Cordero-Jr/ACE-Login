import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  // ✅ Await the promise
  const { userId } = auth();

  const { userId } = await auth();


  if (!userId) {
    return <div className="p-6">You are not logged in.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
      <p className="mt-2">Hello, {user?.firstName || "user"} 👋</p>
    </div>
  );
}
