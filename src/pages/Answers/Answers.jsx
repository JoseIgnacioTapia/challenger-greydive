import { useParams } from 'react-router-dom';

function Answers() {
  const params = useParams();
  console.log(params);

  return <div>{params.id}</div>;
}

export default Answers;
