import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className="hover:text-green-400 hover:underline">Week 2 Assignment</Link>
      <Link href="/week-3" className="hover:text-green-400 hover:underline">Week 3 Assignment</Link>
    </main>
  )
}
