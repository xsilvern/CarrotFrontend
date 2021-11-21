type PadType = {
  keyName: string;
  callback: (name: string) => void;
};

const Pad = (props: PadType) => {
  const { keyName, callback } = props;
  return <button onClick={() => callback(keyName)}>{keyName}</button>;
};
export default Pad;
