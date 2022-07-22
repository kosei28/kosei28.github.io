type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <main className="py-24 px-4">
      <div className="mx-auto flex max-w-4xl flex-col space-y-24">{children}</div>
    </main>
  );
};
