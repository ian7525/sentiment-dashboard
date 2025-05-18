import React, { lazy, Suspense } from "react";

export function lazyLoadComponent(
  importFunc: () => Promise<{ default: React.ComponentType<any> }>
) {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
