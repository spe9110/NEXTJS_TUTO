import Hello from "@/app/components/hello";
export default function Home() {
  console.log("what Am I doing? === SERVER")
  return (
    <>
      <h1 className="text-3xl">Welcome, Spencer. This is your first Next.js project</h1>
      <Hello />
    </>
  );
}
