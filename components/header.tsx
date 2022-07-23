type Props = {
  children: React.ReactNode;
};

export const H1: React.FC<Props> = ({ children }) => {
  return <h1 className="pb-16 text-5xl">{children}</h1>;
};

export const H2: React.FC<Props> = ({ children }) => {
  return <h2 className="pb-12 text-3xl underline">{children}</h2>;
};
