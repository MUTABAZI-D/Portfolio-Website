type Props = {
  name: string;
  tag: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
export const ProjectTag = ({ name, onClick, tag }: Props) => {
  return (
    <button
      className={`${
        name === tag ? "border-purple-500" : "border-slate-600"
      } rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
