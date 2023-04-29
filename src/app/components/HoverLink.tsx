'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

const HoverLink = ({ href, title }: { href: LinkProps['href']; title: string }) => {
  const pathname = usePathname();
  return (
    <Link href={href} title={title} className='group relative'>
      {title}
      <span
        className={`
        ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-white transition-[width] duration-300 group-hover:w-full
        ${pathname === href ? 'w-full' : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default HoverLink;
