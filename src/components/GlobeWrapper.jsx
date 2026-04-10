"use client";

import dynamic from "next/dynamic";

// Dynamic import — SSR disable kiya taaki hydration errors na aaye
const Globe3D = dynamic(
  () => import("@/components/ui/3d-globe").then((mod) => mod.default),
  { ssr: false }
);

const Globe3DDemo = dynamic(
  () => import("@/components/ui/3d-globe").then((mod) => mod.Globe3DDemo),
  { ssr: false }
);

export { Globe3D, Globe3DDemo };