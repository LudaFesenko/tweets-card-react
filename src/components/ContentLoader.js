import ContentLoader from 'react-content-loader';

const SkeletonCard = () => {
  return (
    <>
      <ContentLoader
        width={400}
        height={460}
        viewBox="0 0 380 460"
        backgroundColor="#AE4FB0"
        foregroundColor="#74428F"
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    </>
  );
};
export default SkeletonCard;
