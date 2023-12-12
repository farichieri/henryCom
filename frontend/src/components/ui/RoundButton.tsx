interface Props {
  children: React.ReactNode;
  customClass?: string;
  onClick: () => void;
}

const RoundButton: React.FC<Props> = ({ customClass, children, onClick }) => {
  return (
    <button
      className={`hover:bg-slate-500/20 duration-100 active:bg-slate-500/50 rounded-full border p-1 ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundButton;
