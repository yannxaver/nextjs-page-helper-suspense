import { definePage } from "@/define-page";

const { Page, generateMetadata } = definePage({
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return "foo";
  },
  metadata: () => {
    return {
      title: "Page title",
    };
  },
  page: () => {
    return <div>Hello world</div>;
  },
});

export default Page;
export { generateMetadata };
