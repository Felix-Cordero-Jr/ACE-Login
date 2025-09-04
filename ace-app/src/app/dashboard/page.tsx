import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  // ✅ must await here
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    return <div>Please log in first.</div>;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>User ID: {userId}</p>
      <p>Email: {user?.emailAddresses?.[0]?.emailAddress}</p>
    </div>
  );
}
