import { Button } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
interface ContatctProps {
  rep?: boolean;
}

const ContactComponent = ({ rep }: ContatctProps) => {
  const { t } = useTranslation();
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendMessage = async () => {
    // useEffect(() => {
    //   Aos.init();
    // }, []);

    const token = "7014941655:AAGccnh01y1JkW9E3ggcwSlg5NwoaEKQdL8";
    const chatId = "5923880668"; // The chat ID of the user or group you want to send the message to
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Email: ${message}\nName: ${phoneNumber}\nDescription: ${name}`,
        }),
      });

      if (response.ok) {
        console.log("Message sent successfully");

        toast.success(t("alertMessage"));
        setMessage("");
        setPhoneNumber("");
        setName("");
      } else {
        console.error("Failed to send message");
        toast.error(await response.text());
        throw new Error("Server error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></textarea>
          </div>
          <Button
            type="submit"
            style={{ backgroundColor: "red", outline: "none" }}
            onClick={(e) => {
              e.preventDefault(), sendMessage();
            }}
          >
            Yuborish
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactComponent;
