import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex z-10 flex-col justify-between md:flex-row bg-gray bg-opacity-95 sticky top-0 p-8">
      <h2 className="-tracking-tighter text-txcolor underline font-mono font-bold text-xl">
        <Link href="/">Nikel.dev</Link>
      </h2>

      <div>
        <ul className="flex justify-between gap-4 flex-wrap">
          <li>
            <Link
              className="text-txcolor hover:underline hover:underline-offset-4"
              href="#about"
            >
              about
            </Link>
          </li>
          <li>
            <a
              className="text-txcolor hover:underline hover:underline-offset-4"
              href="#work"
            >
              work
            </a>
          </li>
          <li>
            <a
              className="text-txcolor hover:underline hover:underline-offset-4"
              href="#skills"
            >
              skills & tools
            </a>
          </li>
          <li>
            <a
              className="text-txcolor hover:underline hover:underline-offset-4"
              href="#contact"
            >
              contact
            </a>
          </li>
          <li>
            <a
              className="text-txcolor hover:underline hover:underline-offset-4"
              href="https://dev.to/marcossnikel"
              target="_blank"
            >
              articles
            </a>
          </li>
          <li>
            <a
              className="text-txcolor hover:underline hover:underline-offset-4"
              href="https://www.youtube.com/channel/UC-bkFZU_mwDE1VJvr9xwhhQ"
              target="_blank"
            >
              channel
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
