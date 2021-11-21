const Adult = ({ age }: { age: number }) => {
  return <span>{age >= 20 ? "성인" : "미성년자"}</span>;
};
export default Adult;
