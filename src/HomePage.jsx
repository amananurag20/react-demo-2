export const HomePage = ({ name, age = 25 }) => {
  return (
    <>
      <h1>This is homepage</h1>
      <h2>{name}</h2>
      <h3>age-{age}</h3>
    </>
  );
};
