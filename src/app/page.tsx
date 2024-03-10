import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-foreground flex flex-col items-center sm:items-start">
      <div className="flex flex-col">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl mt-36 md:mt-96">
          Prahosneek.
        </h1>
        <p className="scroll-m-20 text-1xl font-semibold tracking-tight lg:text-2xl">
          Do not prahosvay your money
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/dashboard">Login</Link>
        </Button>
      </div>
    </main>
  );
}
