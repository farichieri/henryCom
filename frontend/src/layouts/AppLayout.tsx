interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return <div className='h-full'>{children}</div>;
};

export default AppLayout;
