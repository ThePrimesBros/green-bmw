import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <React.Fragment>
      <hr />
      <footer class="rounded-lg m-4">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Insomniak
            </a>
            . Tout droit réservé.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="#" class="mr-4 hover:underline md:mr-6">
                A propos
              </Link>
            </li>
            <li>
              <Link href="#" class="mr-4 hover:underline md:mr-6">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="#" class="mr-4 hover:underline md:mr-6">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="#" class="mr-4 hover:underline md:mr-6">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
}
