"use client";

import { Flowbite } from "flowbite-react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Flowbite theme={{ dark: false }}>{children}</Flowbite>;
}
