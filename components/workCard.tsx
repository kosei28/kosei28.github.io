/* eslint-disable @next/next/no-img-element */

type Props = {
  name: string;
  description: string;
  url: string;
  image: string;
};

export const WorkCard: React.FC<Props> = ({ name, description, url, image }) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="flex flex-col overflow-hidden rounded-xl border shadow sm:flex-row">
          <img
            src={image}
            alt={name}
            className="h-48 w-auto shrink-0 object-cover sm:h-auto sm:w-60"
          />
          <div className="p-4">
            <h2 className="mb-4 text-2xl">{name}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
