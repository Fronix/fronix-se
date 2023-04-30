'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

const HoverLink = ({
  href,
  title,
  noPathCheck
}: {
  href: LinkProps['href'];
  title: string;
  noPathCheck?: boolean;
}) => {
  const pathname = usePathname();
  const onHover = !noPathCheck && pathname === href.toString() ? 'w-full' : 'w-0';
  return (
    <Link href={href} title={title} className={`group relative`}>
      {title}
      <span
        className={`
        ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-white transition-[width] duration-300 group-hover:w-full
        ${onHover}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default HoverLink;
