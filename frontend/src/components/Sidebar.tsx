interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div className='border-r w-48 h-screen fixed flex justify-center items-center'>
      <h1>Sidebar</h1>
    </div>
  );
};

export default Sidebar;
