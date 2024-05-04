import Topv from "./Topv";
interface PropsType {
  data: { name: string; des: string }[];
}

const Vcard = (props: PropsType) => {
  return (
    <>
      <section className="flex w-[50%] bg-white rounded-md ">
        <article className=" w-[55%]">
          <div>
            <div className="flex justify-between items-center p-[10px]">
              <img
                src="https://buffer.com/library/content/images/2023/10/free-images.jpg"
                width="44px"
                alt=""
                className="rounded-[10px] h-[42px]"
              />
              <div>
                <h3>Saurav Singh</h3>
                <p>saurav@gmail.com</p>
              </div>
              <h1 className="font-semibold text-[32px]">78%</h1>
            </div>
          </div>
          <div>
            <Topv percent={90} tag="Behavioural" num={9} color="green" />
            <Topv percent={80} tag="Communication" num={8} color="green" />
            <Topv
              percent={60}
              tag="situation handling"
              num={6}
              color="yellow"
            />
          </div>
          <div>
            {props.data.map((ele, ind) => {
              return (
                <div key={ind}>
                  <h1 className="text-[28px] font-semibold">{ele.name}</h1>
                  <p className="text-[18px] ">{ele.des}</p>
                </div>
              );
            })}
          </div>
          <div className="w-[70%] m-auto">
            <button className=" bg-teal-400  font-semibold w-full my-[10px] p-[10px] text-[20px] text-white hover:bg-teal-600">
              SHORTLIST
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Vcard;
