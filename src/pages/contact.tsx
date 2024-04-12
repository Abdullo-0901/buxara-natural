import ContactComponent from "../components/contact";

const Contact = () => {
  return (
    <section className="">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 my-16 gap-16 items-center">
        <div>
          <h1 className="text-4xl font-bold">Aloqa</h1>
          <ContactComponent rep />
        </div>
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="600"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>{" "}
      </div>
      <div className="grid grid-cols-3 mb-16">
        <div className="flex items-center justify-center gap-9">
          <img src="/contact/email.svg" alt="" />
          <h1>
            <span className="font-bold">Email</span>:info@bnpfabric.uz
          </h1>
        </div>
        <div className="flex items-center justify-center gap-9">
          <img src="/contact/phone.svg" alt="" />
          <h1>
            <span className="font-bold">Tel</span>:+992 989195929 <br /> +992
            908838685
          </h1>
        </div>
        <div className="flex items-center  justify-center gap-9">
          <img src="/contact/map.svg" alt="" />
          <h1>
            <span className="font-bold">Manzil</span>:Buxoro, st. Alpomish 80
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
