const Footer = () => {
  return (
    <footer className=" overflow-hidden">
      {/* curve line  */}
      <div className=" h-28 overflow-hidden relative rotate-[180deg] bg-bg1">
        <div className="w-[7800px] h-[7800px] rounded-full bg-white absolute -top-0 left-1/2 -translate-x-1/2" />
      </div>
      <div className="bg-bg1">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-8">
            <div className="col-span-6">
              <div className="relative max-w-48 aspect-square">
                {/* <Image src={"/"}/> */}
              </div>
              <p>
                True taste of Iyengar cuisine, straight from the heart. Every
                bite that tells a story of love and tradition!
              </p>
            </div>
            <div className="col-span-2">helo</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
