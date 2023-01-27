import { useRouter } from 'next/router';

const ClientProjects = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Client Projects</h1>
    </div>
  );
};

export default ClientProjects;
