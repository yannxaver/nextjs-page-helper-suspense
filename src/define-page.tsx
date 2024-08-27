import { cache, Suspense } from "react";

export const definePage = ({
  metadata,
  loader,
  page: PageComponent,
}: {
  loader: () => Promise<any>;
  page: React.ComponentType;
  metadata: () => void;
}) => {
  let loaderCached = cache(loader);

  function Page() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <PageInner />
      </Suspense>
    );
  }

  async function PageInner() {
    const data =
      typeof loaderCached === "function" ? await loaderCached() : undefined;
    console.log("page", data);

    return <PageComponent />;
  }

  async function generateMetadata() {
    const data =
      typeof loaderCached === "function" ? await loaderCached() : undefined;
    console.log("metadata", data);

    return metadata();
  }

  return {
    Page,
    // uncomment to break suspense
    // generateMetadata,
  };
};
