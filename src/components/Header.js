const Header = () => {
  return (
    <div className="sticky top-0">
      <div className="flex justify-between pl-44 pr-24 cursor-default text-white bg-black text-2xl py-3.5">
        <h1>Support : +91 - 9090909090</h1>
        <h1 className="text-[#FF0007]">Book a FREE Test Ride Now</h1>
        <div className="flex space-x-12 text-2xl">
          <h1>Contact</h1>
          <h1>Career</h1>
          <div className="flex">
            <h1 className="pr-2">Media</h1>
            <img src="./arrowdown.svg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
