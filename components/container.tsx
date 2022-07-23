type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <main className="mt-[100vh] px-4 pt-[50vh]">
      <div className="mx-auto flex max-w-4xl flex-col">{children}</div>
    </main>
  );
};
