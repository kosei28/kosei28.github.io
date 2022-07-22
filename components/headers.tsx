type Props = {
  children: React.ReactNode;
};

export const H1: React.FC<Props> = ({ children }) => {
  return <h1 className="mb-6 text-5xl">{children}</h1>;
};

export const H2: React.FC<Props> = ({ children }) => {
  return <h2 className="mb-4 mt-8 text-3xl underline">{children}</h2>;
};
