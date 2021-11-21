type TextType = {
  text: string;
  type: string;
};

const Text = (tex: TextType) => {
  const { text, type } = tex;
  return (
    <>
      {type === "header" && <h1>{text}</h1>}
      {type === "bold" && <strong>{text}</strong>}
    </>
  );
};
export default Text;
