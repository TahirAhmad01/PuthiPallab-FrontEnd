const Sidebar = () => {
  return (
    <div className="bg-white md:w-[300px] min-h-screen p-5 hidden md:block">
      <div className="flex items-center gap-5">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8J1vZp6TEiqy5hIf7GixH0J9s-ciz6R3qTJVSHpdQQw&s"
          alt=""
        />
        <div>
          <h1 className="text-2xl font-semibold">Tahir</h1>
          <p className="text-gray-500">CEO, QubarTech</p>
        </div>
      </div>
      <div className="my-10 flex flex-col justify-between h-[calc(100%-150px)]">
        <div>
          <div className="flex gap-2 px-2  py-3 bg-blue-500 rounded-lg text-white mb-2 cursor-pointer">
            <box-icon color="white" type="solid" name="dashboard"></box-icon>
            <span>Dashboard </span>
          </div>
          <div className="flex gap-2 px-2  py-3  rounded-lg hover:bg-gray-200 cursor-pointer ">
            <box-icon type="solid" name="dashboard"></box-icon>
            <span>Dashboard </span>
          </div>
          <div className="flex gap-2 px-2  py-3  rounded-lg hover:bg-gray-200 cursor-pointer ">
            <box-icon type="solid" name="dashboard"></box-icon>
            <span>Dashboard </span>
          </div>
          <div className="flex gap-2 px-2  py-3  rounded-lg hover:bg-gray-200 cursor-pointer ">
            <box-icon type="solid" name="dashboard"></box-icon>
            <span>Dashboard </span>
          </div>
          <div className="flex gap-2 px-2  py-3  rounded-lg hover:bg-gray-200 cursor-pointer ">
            <box-icon type="solid" name="dashboard"></box-icon>
            <span>Dashboard </span>
          </div>
          <hr className="my-5" />
          <div className="flex gap-2 px-2  py-3  rounded-lg hover:bg-gray-200 cursor-pointer ">
            <box-icon type="solid" name="dashboard"></box-icon>
            <span>Setting </span>
          </div>
        </div>
        <div className="flex gap-2 px-2  py-3  rounded-lg hover:bg-gray-200 cursor-pointer ">
          <box-icon type="solid" name="dashboard"></box-icon>
          <span>LogOut </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
