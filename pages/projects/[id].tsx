import { useRouter } from 'next/router';

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Project: {id}</h1>
      <p>This is a placeholder for project detail page.</p>
    </div>
  );
}