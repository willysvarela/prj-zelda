import { useRouter } from "next/router";

const pageData = {
  id: 1,
  name: "willysvarela",
  description: "",
  links: [
    { name: "Instagram", url: "https://instagram.com/willysvarela", backgroundColor: "#ccc" },
    { name: "twitter", url: "https://twitter.com/willysvarela", backgroundColor: "#ccc" }
  ]
};

const Page = () => {
  const router = useRouter();
  const { page } = router.query;

	const renderLink = (link) => {
		return (
			<li key={link.id}><a target="_blank" href={link.url} rel="noreferrer">{link.name}</a></li>
		)
	}

  return (
    <div data-theme="light">
      Page: {pageData.name}
      <ul>{pageData.links.map((link) => renderLink(link))}</ul>
    </div>
  );

	

};

export default Page;
