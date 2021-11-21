type PhotoType = {
  address: string;
  description?: string;
};
const Photo = (props: PhotoType) => {
  const { address, description } = props;
  return (
    <>
      <img src={address} alt="parrot" />
      <article>{description}</article>
    </>
  );
};
export default Photo;
