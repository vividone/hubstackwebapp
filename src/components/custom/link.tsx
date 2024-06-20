'use client';

import { useEffect, useTransition } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import nProgress from 'nprogress';
import "nprogress/nprogress.css";

/**
 * A custom Link component that wraps Next.js's next/link component.
 */
export default function Link({
  href,
  children,
  replace,
  ...rest
}: Parameters<typeof NextLink>[0]) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    nProgress.configure({ easing: "ease", speed: 500 });
    if(isPending) {
      nProgress.start();
    }
    else {
      nProgress.done()
    }
  }, [isPending]);

  return (
    <NextLink
      href={href}
      onClick={(e) => {
        e.preventDefault();
        startTransition(() => {
          const url = href.toString();
          if (replace) {
            router.replace(url);
          } else {
            router.push(url);
          }
        });
      }}
      {...rest}
    >
      {children}
    </NextLink>
  );
}