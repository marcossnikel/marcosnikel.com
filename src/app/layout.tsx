import "./globals.css";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: "nikeldev",
  description: "portfolio to showcase my skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray bg-opacity-80">
          <div className="mx-8">
            <ul className="flex justify-between items-center p-2">
              <Link href="/">
                <h2 className="-tracking-tighter text-txcolor underline font-mono font-bold text-xl">
                  Nikel.dev
                </h2>
              </Link>
              <div>
                <ul className="flex justify-between gap-5">
                  <li>
                    <Link
                      className=" text-txcolor hover:underline hover:underline-offset-4"
                      href="#home"
                    >
                      home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-txcolor hover:underline hover:underline-offset-4"
                      href="#about"
                    >
                      about
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-txcolor hover:underline hover:underline-offset-4"
                      href="#work"
                    >
                      work
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-txcolor hover:underline hover:underline-offset-4"
                      href="#skills"
                    >
                      skills & tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-txcolor hover:underline hover:underline-offset-4"
                      href="#contact"
                    >
                      contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-txcolor hover:underline hover:underline-offset-4"
                      href="/blog"
                    >
                      blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-txcolor hover:underline hover:underline-offset-4"
                      href="/channel"
                    >
                      channel
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
