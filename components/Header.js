import Link from 'next/link';
import Image from 'next/image'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">

      <br></br>
      <p className="text-2xl dark:text-white text-center">
        <Link href="https://www.linkedin.com/in/adrian-koszpek/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
