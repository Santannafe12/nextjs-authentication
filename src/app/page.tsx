import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <h1>Você está logado!</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
