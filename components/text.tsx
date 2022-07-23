type Props = {
  children: React.ReactNode;
};

export const Text: React.FC<Props> = ({ children }) => {
  return <div className="flex flex-col space-y-6 text-xl">{children}</div>;
};
