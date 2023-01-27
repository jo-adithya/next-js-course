import { useRouter } from 'next/router';

const PortfolioInfo = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  

  return (
    <div>
      <h1>Portfolio Info Page</h1>
    </div>
  );
};

export default PortfolioInfo;
