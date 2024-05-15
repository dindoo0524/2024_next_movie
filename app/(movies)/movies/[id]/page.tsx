interface iParams {
  params: { id: string };
}

const MovieDetailPage = ({ params: { id } }: iParams) => {
  return <div>Movie Detail Page {id}</div>;
};

export default MovieDetailPage;
