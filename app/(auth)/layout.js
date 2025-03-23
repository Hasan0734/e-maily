import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 self-center font-medium"
          >
            <span className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl">
              Compose<span className="text-black dark:text-white">Flow</span>
            </span>
          </Link>
        </div>
        {children}
      </div>
    </>
  );
}
