import Head from "next/head";
import { useRouter } from "next/router";

function Cabin() {
  const router = useRouter();
  const cabinId = router.query.cabinId;

  return (
    <>
      <Head>
        <title>Cabin #{cabinId} | The Wild Oasis</title>
      </Head>
      <div>Cabin #{cabinId}</div>
    </>
  );
}

export default Cabin;
