import Image from 'next/image';

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
          <div className="relative h-48 w-auto shrink-0 sm:h-auto sm:w-60">
            <Image src={image} layout="fill" objectFit="cover" alt={name} />
          </div>
          <div className="p-4">
            <h2 className="mb-4 text-2xl">{name}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
