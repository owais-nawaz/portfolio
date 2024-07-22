import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" width={55} height={55} priority alt=""></Image>
    </Link>
  );
};

export default Logo;
