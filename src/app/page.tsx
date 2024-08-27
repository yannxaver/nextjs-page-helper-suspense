import { definePage } from "@/define-page";

const { Page, generateMetadata } = definePage({
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return "foo";
  },
  page: () => {
    return <div>Hello world</div>;
  },
  metadata: () => {
    return {
      title: "Page title",
    };
  },
});

export default Page;
export { generateMetadata };
