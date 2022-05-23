import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">

      <img class="w-27 h-27 rounded-full block mx-auto mb-2" src="https://media-exp1.licdn.com/dms/image/D4E35AQG5WXDskSZjIw/profile-framedphoto-shrink_400_400/0/1646252043262?e=1653890400&v=beta&t=Tuqhai3Z7s11huMyVYJG500tGPHiA5Qilv1Yr46QgWQ" width="50px" height="50px" />
      
      <br></br>
      <p className="text-2xl dark:text-white text-center">
        <Link href="https://www.linkedin.com/in/adrian-koszpek/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
