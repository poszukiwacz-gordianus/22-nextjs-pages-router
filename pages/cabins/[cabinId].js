import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
import { useRouter } from "next/router";

// Dynamically generated (SSR)
export async function getServerSideProps({ params: { cabinId } }) {
  const cabin = await getCabin(cabinId);
  return { props: { cabin } };
}

// This is how we could do SSG
// getStaticPaths + getStaticProps

function Cabin({ cabin }) {
  // const router = useRouter();
  // const cabinId = router.query.cabinId;

  return (
    <>
      <Head>
        <title>Cabin {cabin.name} | The Wild Oasis</title>
      </Head>

      <div className=" max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
