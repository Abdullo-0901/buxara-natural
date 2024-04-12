import { Button } from "@mantine/core";
interface ContatctProps {
  rep?: boolean;
}

const ContactComponent = ({ rep }: ContatctProps) => {
  return (
    <section className="bg-white ">
      <div className=" mx-auto max-w-screen-xl">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        {!rep && (
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        )}

        <form action="#" className="space-y-8">
          {!rep && (
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
          )}
          <input
            type="email"
            id="email"
            placeholder={`${rep ? "Sizning electron manzilingiz" : ""}`}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5   "
            required
          />

          <div>
            {!rep && (
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
            )}
            <input
              type="text"
              id="subject"
              placeholder={`${rep ? "Telefon raqami" : ""}`}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm   "
              required
            />
          </div>
          <div className="sm:col-span-2">
            {!rep && (
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
            )}
            <textarea
              id="message"
              rows={6}
              placeholder={`${rep ? "Sizning xabaringiz shu erda" : ""}`}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300  "
            ></textarea>
          </div>
          <Button
            type="submit"
            style={{ backgroundColor: "red", outline: "none" }}
          >
            Yuborish
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactComponent;
